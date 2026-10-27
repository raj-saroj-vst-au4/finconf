<?php
require __DIR__.'/includes/site.php';

page_start('speakers', 'Speakers — QRD 2027, IIT Bombay',
    'Keynote, academia, and industry speakers at QRD 2027, the Conference on Quant, Risk & Data at VMCC, IIT Bombay, 4–6 March 2027.');

// An invited speaker from academia or industry, set like a keynote.
// function speaker(array $s): string {
//     $talk = $s['talk'] !== '' ? '<p>'.e($s['talk']).'</p>' : '';
//     return '<article class="keynote"><h3>'.e($s['name']).'</h3><p class="keynote-when">'.e($s['affiliation']).'</p>'.$talk.'</article>';
// }

?>
    <section class="page-hero" <?= figure_attrs(2) ?> aria-labelledby="page-title">
        <div class="wrap">
            <h1 id="page-title" class="page-title" data-split><span class="line">Speakers</span></h1>
            <div class="page-intro">
                <p class="lede">Two keynote addresses frame the conference, alongside invited speakers from academia and industry.</p>
            </div>
        </div>
    </section>

    <section id="keynotes" class="page-section" data-quiet aria-labelledby="keynotes-title">
        <div class="wrap page-grid">
            <h2 id="keynotes-title">Keynote speakers</h2>
            <div class="speaker-list">
                <article class="keynote">
                    <p class="keynote-when">Keynote Address I, Friday 5 March, 09:45 AM</p>
                    <h3>Rethinking the possibilities of finance</h3>
                    <p>Ideas, models, and open questions at the leading edge of quantitative research.</p>
                    <p class="keynote-speaker">Speaker to be announced</p>
                </article>
                <article class="keynote">
                    <p class="keynote-when">Keynote Address II, Saturday 6 March, 09:25 AM</p>
                    <h3>Understanding what moves markets</h3>
                    <p>Technology, market structure, and the evolving landscape of electronic trading.</p>
                    <p class="keynote-speaker">Speaker to be announced</p>
                </article>
                <p class="fine">Keynote themes are indicative. The full schedule is in the <a href="<?= e(href('program')) ?>">programme</a>.</p>
            </div>
        </div>
    </section>

    <?php foreach (['academia' => ['Academia speakers', $academia_speakers], 'industry' => ['Industry speakers', $industry_speakers]] as $id => [$heading, $list]): ?>
    <section id="<?= $id ?>" class="page-section" data-quiet aria-labelledby="<?= $id ?>-title">
        <div class="wrap page-grid">
            <h2 id="<?= $id ?>-title"><?= e($heading) ?></h2>
            <?php if ($list): ?>
            <!-- <div class="speaker-list"><?php foreach ($list as $s) echo speaker($s); ?></div> -->
            <div class="speaker-list">
                <ul class="operations" aria-labelledby="operations-title"><?php foreach ($list as $s) echo speaker($s); ?></ul>
            </div>
            <?php else: ?>
            <div class="prose"><p class="pending">Speakers will be announced.</p></div>
            <?php endif; ?>
        </div>
    </section>
    <?php endforeach; ?>

<?php site_footer(); ?>
<?php page_end();
