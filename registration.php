<?php
require __DIR__.'/includes/site.php';

page_start('registration', 'Registration — QRD 2027, IIT Bombay',
    'Registration for QRD 2027, the International Conference on Quant, Risk and Data at VMCC, IIT Bombay, 4–6 March 2027: conference, poster and workshop fees, deadlines and accommodation.');
?>
    <section class="page-hero" <?= figure_attrs(3) ?> aria-labelledby="page-title">
        <div class="wrap">
            <?= page_kicker() ?>
            <h1 id="page-title" class="page-title" data-split><span class="line">Registration</span></h1>
            <div class="page-intro">
                <p class="lede"><?= $registration_url === '' ? 'Registration has not opened yet. Fees and deadlines are below; the registration link will be added here when registration opens.' : 'Registration is open. Check the fees and key dates below, then register through the link.' ?></p>
                <div class="actions"><?= action_button($registration_url, 'Register', 'registration') ?></div>
            </div>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="audience-title">
        <div class="wrap page-grid">
            <h2 id="audience-title">Who should attend</h2>
            <div class="prose">
                <p>PhD students, postdoctoral researchers and faculty in mathematics, statistics, business, economics, finance, physics and data science.</p>
                <p>Industry professionals in quantitative finance, data science, statistics and AI/ML are strongly encouraged to attend the conference and its workshops.</p>
            </div>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="fees-title">
        <div class="wrap page-grid">
            <h2 id="fees-title">Conference fees</h2>
            <div class="prose">
                <p>These rates cover the two main conference days and oral paper presentations.</p>
                <table class="data-table">
                    <caption><strong>Table 1.</strong> Conference registration fees by category.</caption>
                    <thead><tr><th scope="col">Category</th><th scope="col">Early bird</th><th scope="col">Regular</th></tr></thead>
                    <tbody>
                        <?php foreach ($fees as [$category, $early, $regular]): ?>
                        <tr><th scope="row"><?= e($category) ?></th><?= cell($early).cell($regular) ?></tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="poster-fees-title">
        <div class="wrap page-grid">
            <h2 id="poster-fees-title">Poster presentation fees</h2>
            <div class="prose">
                <table class="data-table">
                    <caption><strong>Table 2.</strong> Poster presentation registration fees by category.</caption>
                    <thead><tr><th scope="col">Category</th><th scope="col">Early bird</th><th scope="col">Regular</th></tr></thead>
                    <tbody>
                        <?php foreach ($poster_fees as [$category, $early, $regular]): ?>
                        <tr><th scope="row"><?= e($category) ?></th><?= cell($early).cell($regular) ?></tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
                <p><strong>Important:</strong> poster registration includes entry to both main conference days, lunch, refreshments and a participation/presentation certificate. Participants already registered for the main conference should <strong>not</strong> pay an additional poster fee.</p>
            </div>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="workshop-fees-title">
        <div class="wrap page-grid">
            <h2 id="workshop-fees-title">Workshop fees</h2>
            <div class="prose">
                <p>The pre-conference <a href="<?= e(href('workshops')) ?>">HFT and Derivative Pricing workshops</a> on Day 0 (Thursday 4 March) will run simultaneously. Participants should register for <strong>one workshop only</strong>.</p>
                <table class="data-table">
                    <caption><strong>Table 3.</strong> Pre-conference workshop fees by category.</caption>
                    <thead><tr><th scope="col">Category</th><th scope="col">Workshop only</th></tr></thead>
                    <tbody>
                        <?php foreach ($workshop_fees as [$category, $fee]): ?>
                        <tr><th scope="row"><?= e($category) ?></th><?= cell($fee) ?></tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
                <p class="fine">No booking or payment is taken on this site<?= $registration_url === '' ? ' yet' : '; registration opens on a separate page' ?>.</p>
            </div>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="dates-title">
        <div class="wrap page-grid">
            <h2 id="dates-title">Deadlines and important dates</h2>
            <div class="prose">
                <table class="data-table">
                    <caption><strong>Table 4.</strong> Deadlines and important dates.</caption>
                    <thead><tr><th scope="col">Activity</th><th scope="col">Date</th></tr></thead>
                    <tbody>
                        <?php foreach ($dates as [$label, $when]): ?>
                        <tr><th scope="row"><?= e($label) ?></th><?= cell($when) ?></tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
                <p class="fine">Submitting a paper or a poster? See the <a href="<?= e(href('papers')) ?>">call for papers</a>.</p>
            </div>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="stay-title">
        <div class="wrap page-grid">
            <h2 id="stay-title">Accommodation</h2>
            <div class="prose">
                <p>Accommodation options, including any on-campus accommodation for students, will be announced by the organisers.</p>
                <p>For travel to IIT Bombay, see the <a href="<?= e(href('venue')) ?>">venue</a> page.</p>
            </div>
        </div>
    </section>

<?php site_footer(); ?>
<?php page_end(dialog_templates('registration'));
