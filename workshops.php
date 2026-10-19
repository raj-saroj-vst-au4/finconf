<?php
require __DIR__.'/includes/site.php';

$day = $days[0];
page_start('workshops', 'Workshops — QRD 2027, IIT Bombay',
    'Pre-conference workshops at QRD 2027 on Thursday 4 March 2027 at VMCC, IIT Bombay: high-frequency trading (HFT) and derivative pricing, run side by side.');
?>
    <section class="page-hero" <?= figure_attrs(1) ?> aria-labelledby="page-title">
        <div class="wrap">
            <?= page_kicker() ?>
            <h1 id="page-title" class="page-title" data-split><span class="line">Workshops</span></h1>
            <div class="page-intro">
                <p class="lede">Two pre-conference workshops open QRD 2027 on Thursday 4 March, one on high-frequency trading and one on derivative pricing. They run side by side on the same schedule, so register for one of them.</p>
                <div class="actions"><?= action_button($registration_url, 'Register', 'registration') ?><a class="pill pill-line" href="#schedule">Schedule</a></div>
            </div>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="when-title">
        <div class="wrap page-grid">
            <h2 id="when-title">Date and venue</h2>
            <dl class="prose facts-list">
                <div><dt>Date</dt><dd><?= e($day['label']) ?>, <?= e($day['date']) ?> 2027, <?= e(day_hours($day)) ?></dd></div>
                <div><dt>Venue</dt><dd>Victor Menezes Convention Centre (VMCC), IIT Bombay, Powai, Mumbai. Directions are on the <a href="<?= e(href('venue')) ?>">venue</a> page.</dd></div>
                <div><dt>Format</dt><dd>Two workshops in parallel. Each has two lecture parts, a hands-on session and an interactive discussion.</dd></div>
            </dl>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="audience-title">
        <div class="wrap page-grid">
            <h2 id="audience-title">Who should attend</h2>
            <div class="prose">
                <ul>
                    <li>Students and doctoral scholars in mathematics, statistics, business, economics, finance, physics and data science.</li>
                    <li>Postdoctoral researchers and faculty in the same fields.</li>
                    <li>Industry professionals in quantitative finance, data science, statistics and AI/ML.</li>
                </ul>
            </div>
        </div>
    </section>

    <?php foreach ($workshops as $i => $workshop): ?>
    <section id="workshop-<?= $i + 1 ?>" class="page-section" data-quiet aria-labelledby="workshop-<?= $i + 1 ?>-title">
        <div class="wrap page-grid">
            <h2 id="workshop-<?= $i + 1 ?>-title">Workshop on <?= e($workshop['title']) ?></h2>
            <dl class="prose facts-list">
                <div><dt>Track</dt><dd><?= e($workshop['track']) ?></dd></div>
                <div><dt>Instructors</dt><dd<?= $workshop['instructors'] === '' ? ' class="is-pending">To be announced' : '>'.e($workshop['instructors']) ?></dd></div>
                <div><dt>Outline</dt><dd><?php if ($workshop['outline'] === []): ?><span class="is-pending">To be announced</span><?php else: ?>
                    <ul>
                        <?php foreach ($workshop['outline'] as $topic): ?>
                        <li><?= e($topic) ?></li>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?></dd></div>
            </dl>
        </div>
    </section>
    <?php endforeach; ?>

    <section id="schedule" class="page-section" data-quiet aria-labelledby="schedule-title">
        <div class="wrap page-grid">
            <h2 id="schedule-title">Schedule</h2>
            <div class="prose">
                <p>Both workshops follow the same timetable, in separate halls.</p>
                <table class="data-table schedule-table">
                    <caption><strong>Table 1.</strong> Workshop schedule, <?= e($day['date']) ?> 2027.</caption>
                    <thead><tr><th scope="col">Time</th><th scope="col">Session</th></tr></thead>
                    <tbody>
                        <?php foreach ($day['slots'] as [$start, $end, $kind, $title]): ?>
                        <tr<?= $kind === 'break' ? ' class="is-break"' : '' ?>><th scope="row"><?= e(time_range($start, $end)) ?></th><td><?= e($title) ?></td></tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
                <p class="fine">The full conference schedule is in the <a href="<?= e(href('program')) ?>#day-0">programme</a>.</p>
            </div>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="fees-title">
        <div class="wrap page-grid">
            <h2 id="fees-title">Fees</h2>
            <div class="prose">
                <p>Register for <strong>one workshop only</strong>: both run at the same time.</p>
                <table class="data-table">
                    <caption><strong>Table 2.</strong> Pre-conference workshop fees by category.</caption>
                    <thead><tr><th scope="col">Category</th><th scope="col">Workshop only</th></tr></thead>
                    <tbody>
                        <?php foreach ($workshop_fees as [$category, $fee]): ?>
                        <tr><th scope="row"><?= e($category) ?></th><?= cell($fee) ?></tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
                <p class="fine">Conference and poster fees, deadlines and accommodation are on the <a href="<?= e(href('registration')) ?>">registration</a> page.</p>
            </div>
        </div>
    </section>

<?php site_footer(); ?>
<?php page_end(dialog_templates('registration'));
