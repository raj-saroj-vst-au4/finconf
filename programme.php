<?php
require __DIR__.'/includes/site.php';

page_start('program', 'Programme — QRD 2027, IIT Bombay',
    'The QRD 2027 programme includes pre-conference workshops on Thursday 4 March, followed by keynotes, parallel sessions, poster presentations, a panel discussion, and evening events on 5–6 March 2027 at VMCC, IIT Bombay.');

// The overview chart runs from 8 AM to 8 PM to include evening events; each agenda uses 5-minute rows.
$chart_from = minutes('08:00');
$chart_to = minutes('20:00');
$chart_span = $chart_to - $chart_from;
$parallel = ['workshop', 'session'];
?>
    <section class="page-hero" <?= figure_attrs(1) ?> aria-labelledby="page-title">
        <div class="wrap">
            <h1 id="page-title" class="page-title" data-split><span class="line">Programme</span></h1>
            <div class="page-intro">
                <p class="lede">Pre-conference workshops on Thursday 4 March, followed by the main conference on Friday 5 and Saturday 6 March at VMCC, IIT Bombay. Details of individual sessions and speakers will be announced in due course.</p>
            </div>
        </div>
    </section>

    <section id="overview" class="overview" data-quiet aria-labelledby="overview-title">
        <div class="wrap">
            <h2 id="overview-title">The three days, to scale</h2>
            <div class="span-chart">
                <div class="span-axis" aria-hidden="true">
                    <?php for ($hour = 8; $hour <= $chart_to / 60; $hour += 2): ?>
                    <span style="--x: <?= ($hour * 60 - $chart_from) / $chart_span * 100 ?>%"><?= date('g A', mktime($hour, 0)) ?></span>
                    <?php endfor; ?>
                </div>
                <ol class="span-rows">
                    <?php foreach ($days as $i => $day): ?>
                    <li><a class="span-row" href="#day-<?= $i + 1 ?>">
                        <span class="span-day"><strong><?= e($day['label']) ?></strong> <?= e($day['short']) ?></span>
                        <span class="span-track" aria-hidden="true">
                            <?php foreach ($day['slots'] as [$start, $end, $kind]): ?>
                            <span class="seg seg-<?= $kind ?>" style="--x: <?= (minutes($start) - $chart_from) / $chart_span * 100 ?>%; --w: <?= (minutes($end) - minutes($start)) / $chart_span * 100 ?>%"></span>
                            <?php endforeach; ?>
                        </span>
                        <span class="visually-hidden">: <?= e($day['theme']) ?>, <?= e(day_hours($day)) ?></span>
                    </a></li>
                    <?php endforeach; ?>
                </ol>
                <ul class="span-legend" aria-label="Key">
                    <li><span class="seg seg-keynote"></span>Keynote</li>
                    <li><span class="seg seg-session"></span>Parallel sessions and workshops</li>
                    <li><span class="seg seg-plenary"></span>Opening, panel, and closing</li>
                    <li><span class="seg seg-posters"></span>Lunch and posters</li>
                    <li><span class="seg seg-break"></span>Registration and breaks</li>
                </ul>
            </div>
            <p class="fine">Each parallel technical session and paper-presentation slot comprises three concurrent presentations in separate halls (Tracks A, B, and C). Tea and coffee breaks are scheduled between sessions and during transitions, allowing time for networking and movement between venues.</p>
        </div>
    </section>

    <?php foreach ($days as $i => $day):
        $day_start = minutes($day['slots'][0][0]);
        $units = (minutes(end($day['slots'])[1]) - $day_start) / 5;
        $first_hour = (int) ceil($day_start / 60);
        $last_hour = (int) floor(minutes(end($day['slots'])[1]) / 60);
    ?>
    <section id="day-<?= $i + 1 ?>" class="day" data-quiet aria-labelledby="day-<?= $i + 1 ?>-title">
        <div class="wrap day-grid">
            <header class="day-head">
                <h2 id="day-<?= $i + 1 ?>-title"><span class="day-label"><?= e($day['label']) ?></span> <span class="day-date"><?= e($day['date']) ?></span></h2>
                <p class="day-theme"><?= e($day['theme']) ?></p>
                <p class="day-hours"><?= e(day_hours($day)) ?></p>
                <p class="day-text"><?= e($day['description']) ?></p>
                <?php if ($day['lanes'][0][1] !== ''): ?>
                <dl class="day-lanes">
                    <?php foreach ($day['lanes'] as [$lane, $subject]): ?>
                    <div><dt><?= e($lane) ?></dt><dd><?= e($subject) ?></dd></div>
                    <?php endforeach; ?>
                </dl>
                <?php endif; ?>
                <?php if (in_array('workshop', array_column($day['slots'], 2), true)): ?>
                <a class="day-link" href="<?= e(href('workshops')) ?>">About the workshops</a>
                <?php endif; ?>
            </header>
            <div class="agenda-frame" style="--units: <?= $units ?>; --lanes: <?= count($day['lanes']) ?>; --hour-offset: <?= ($first_hour * 60 - $day_start) / 5 ?>">
                <div class="agenda-lanes" aria-hidden="true">
                    <?php foreach ($day['lanes'] as [$lane, $subject]): ?>
                    <span><?= e($lane) ?><?= $subject !== '' ? '<small>'.e($subject).'</small>' : '' ?></span>
                    <?php endforeach; ?>
                </div>
                <div class="agenda-axis" aria-hidden="true">
                    <?php for ($hour = $first_hour; $hour <= $last_hour; $hour++): ?>
                    <span style="--at: <?= ($hour * 60 - $day_start) / 5 + 1 ?>"><?= date('g A', mktime($hour, 0)) ?></span>
                    <?php endfor; ?>
                </div>
                <ol class="agenda">
                    <?php foreach ($day['slots'] as $slot):
                        [$start, $end, $kind, $title] = $slot;
                        $rows = '--from: '.((minutes($start) - $day_start) / 5 + 1).'; --to: '.((minutes($end) - $day_start) / 5 + 1);
                        $slot_time = $slot[5] ?? time_range($start, $end);
                    ?>
                    <li class="slot slot-<?= $kind ?>" style="<?= $rows ?>">
                        <p class="slot-head"><span class="slot-time"><?= e($slot_time) ?></span> <span class="slot-title"><?php
                            if ($kind === 'keynote'): ?><a href="<?= e(href('speakers')) ?>#keynotes"><?= e($title) ?></a><?php
                            else: echo e($title); endif; ?></span><?php
                            if ($kind === 'posters'): ?> <a class="slot-link" href="<?= e(href('papers')) ?>#posters">Call for posters</a><?php endif; ?></p>
                        <?php if (in_array($kind, $parallel, true)): ?>
                        <ul class="slot-lanes">
                            <?php foreach ($day['lanes'] as $l => [$lane]): ?>
                            <li><span class="lane-name"><?= e($lane) ?></span><?php if (isset($slot[4])): ?> <span class="lane-title"><?= e($slot[4][$l]) ?></span><?php endif; ?></li>
                            <?php endforeach; ?>
                        </ul>
                        <?php endif; ?>
                    </li>
                    <?php endforeach; ?>
                </ol>
            </div>
        </div>
    </section>
    <?php endforeach; ?>

<?php site_footer(); ?>
<?php page_end();
