<?php
require __DIR__.'/includes/site.php';

page_start('speakers', 'Speakers — QRD 2027, IIT Bombay',
    'Keynote, academia, and industry speakers at QRD 2027, the Conference on Quant, Risk & Data at VMCC, IIT Bombay, 4–6 March 2027.');

// When each keynote takes place, read from the programme: 'Keynote Address I' => 'Friday 5 March, 09:30 AM'.
$keynote_when = [];
foreach ($days as $day) {
    foreach ($day['slots'] as [$start, , $kind, $title]) {
        if ($kind === 'keynote') $keynote_when[$title] = $day['date'].', '.clock($start);
    }
}

// A speaker's photo, or their initials until there is one. The name is printed beside it, so it carries no alt text.
function portrait(string $name, string $photo, string $class): string {
    if ($photo !== '') return '<img class="'.$class.'" src="'.e($photo).'" alt="" width="400" height="400" loading="lazy" decoding="async">';
    $words = array_values(array_filter(explode(' ', preg_replace('/^(Prof|Dr|Mr|Ms|Mrs)\.?\s+/i', '', $name))));
    $initials = $words ? mb_substr($words[0], 0, 1).(count($words) > 1 ? mb_substr(end($words), 0, 1) : '') : '';
    return '<span class="'.$class.' portrait-initials" aria-hidden="true">'.e(mb_strtoupper($initials)).'</span>';
}

// A speaker's name, linked to their profile page when there is one.
function speaker_name(string $name, string $url): string {
    if ($url === '') return e($name);
    return '<a href="'.e($url).'" target="_blank" rel="noopener noreferrer">'.e($name).'<span class="visually-hidden"> (profile, opens in a new tab)</span></a>';
}

$groups = [
    'academia' => ['Academia speakers', '', $academia_speakers],
    'industry' => ['Industry speakers', '', $industry_speakers],
];
?>
    <section class="page-hero" <?= figure_attrs(2) ?> aria-labelledby="page-title">
        <div class="wrap">
            <h1 id="page-title" class="page-title" data-split><span class="line">Speakers</span></h1>
            <div class="page-intro">
                <p class="lede">Two keynote addresses frame the conference, alongside invited contributions from academia and industry. Further speaker announcements will be made in due course.</p>
                <nav class="actions" aria-label="Speaker groups"><a class="pill pill-line" href="#keynotes">Keynotes</a><a class="pill pill-line" href="#academia">Academia</a><a class="pill pill-line" href="#industry">Industry</a></nav>
            </div>
        </div>
    </section>

    <section id="keynotes" class="page-section" data-quiet aria-labelledby="keynotes-title">
        <div class="wrap page-grid">
            <h2 id="keynotes-title">Keynote speakers</h2>
            <div>
                <div class="keynote-grid">
                    <?php foreach ($keynotes as $slot => $k): ?>
                    <article class="keynote-card">
                        <p class="keynote-when"><?= e($slot) ?><?= isset($keynote_when[$slot]) ? '<br>'.e($keynote_when[$slot]) : '' ?></p>
                        <h3><?= e($k['title'] !== '' ? $k['title'] : 'Keynote details forthcoming') ?></h3>
                        <p class="keynote-summary"><?= e($k['summary'] !== '' ? $k['summary'] : 'The lecture title and abstract will be published once confirmed.') ?></p>
                        <div class="keynote-by">
                            <?php if ($k['speaker'] === ''): ?>
                            <p class="keynote-pending">The keynote speaker will be announced in due course.</p>
                            <?php else: ?>
                            <?= portrait($k['speaker'], $k['photo'], 'keynote-portrait') ?>
                            <div><p class="keynote-speaker"><?= speaker_name($k['speaker'], $k['url']) ?></p><?php if ($k['affiliation'] !== ''): ?><p class="speaker-org"><?= e($k['affiliation']) ?></p><?php endif; ?></div>
                            <?php endif; ?>
                        </div>
                    </article>
                    <?php endforeach; ?>
                </div>
                <p class="fine">Keynote topics are indicative; speaker and lecture details will be announced in due course. Scheduled keynote times are listed in the <a href="<?= e(href('program')) ?>">programme</a>.</p>
            </div>
        </div>
    </section>

    <?php foreach ($groups as $id => [$heading, $intro, $list]): ?>
    <section id="<?= $id ?>" class="page-section" data-quiet aria-labelledby="<?= $id ?>-title">
        <div class="wrap page-grid">
            <div>
                <h2 id="<?= $id ?>-title"><?= e($heading) ?></h2>
                <p class="speaker-group-intro"><?= e($intro) ?></p>
            </div>
            <?php if ($list): ?>
            <ul class="speaker-grid">
                <?php foreach ($list as $s): ?>
                <li class="speaker-card">
                    <?php $portrait = portrait($s['name'], $s['photo'] ?? '', 'speaker-portrait'); ?>
                    <?= ($s['url'] ?? '') === '' ? $portrait : '<a class="speaker-photo-link" href="'.e($s['url']).'" target="_blank" rel="noopener noreferrer" tabindex="-1" aria-hidden="true">'.$portrait.'</a>' ?>
                    <h3><?= speaker_name($s['name'], $s['url'] ?? '') ?></h3>
                    <?php if ($s['affiliation'] !== ''): ?><p class="speaker-org"><?= e($s['affiliation']) ?></p><?php endif; ?>
                    <?php if ($s['talk'] !== ''): ?><p class="speaker-talk"><?= e($s['talk']) ?></p><?php endif; ?>
                </li>
                <?php endforeach; ?>
            </ul>
            <?php else: ?>
            <div class="prose"><p class="pending">Invited speakers in this category will be announced in due course.</p></div>
            <?php endif; ?>
        </div>
    </section>
    <?php endforeach; ?>

<?php site_footer(); ?>
<?php page_end();
