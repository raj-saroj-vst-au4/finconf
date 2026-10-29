<?php
require __DIR__.'/includes/site.php';

page_start('registration', 'Registration — QRD 2027, IIT Bombay',
    'Registration for QRD 2027, the Conference on Quant, Risk & Data at VMCC, IIT Bombay, 4–6 March 2027: conference, poster, and workshop fees and deadlines.');
?>
    <section class="page-hero" <?= figure_attrs(3) ?> aria-labelledby="page-title">
        <div class="wrap">
            <h1 id="page-title" class="page-title" data-split><span class="line">Registration</span></h1>
            <div class="page-intro">
                <p class="lede"><?= $registration_url === '' ? 'Registration has not opened yet. Fees and deadlines are listed below; a registration link will be added when registration opens.' : 'Registration is open. Review the fees and key dates below, then register using the link.' ?></p>
                <div class="actions"><?= action_button($registration_url, 'Register', 'registration') ?></div>
            </div>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="audience-title">
        <div class="wrap page-grid">
            <h2 id="audience-title">Who should attend</h2>
            <div class="prose">
                <p>PhD students, postdoctoral researchers, and faculty in mathematics, statistics, business, economics, finance, physics, and data science.</p>
                <p>Industry professionals in quantitative finance, data science, statistics, and AI/ML are strongly encouraged to attend the conference and its workshops.</p>
            </div>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="fees-title">
        <div class="wrap page-grid">
            <h2 id="fees-title">Conference fees</h2>
            <div class="prose">
                <p>These rates cover the two main conference days and oral paper presentations. All fees are exclusive of GST.</p>
                <table class="data-table" aria-label="Conference registration fees by category">
                    <thead><tr><th scope="col">Category</th><th scope="col">Early-bird</th><th scope="col">Regular</th></tr></thead>
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
                <table class="data-table" aria-label="Poster presentation registration fees by category">
                    <thead><tr><th scope="col">Category</th><th scope="col">Early bird</th><th scope="col">Regular</th></tr></thead>
                    <tbody>
                        <?php foreach ($poster_fees as [$category, $early, $regular]): ?>
                        <tr><th scope="row"><?= e($category) ?></th><?= cell($early).cell($regular) ?></tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
                <p><strong>Important:</strong> Poster registration includes admission to both main conference days, lunch, refreshments, and a certificate of participation or presentation. Participants already registered for the main conference should <strong>not</strong> pay an additional poster fee.</p>
                <p class="fine">Presenters are required to bring a printed copy of their poster to the conference.</p>
            </div>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="workshop-fees-title">
        <div class="wrap page-grid">
            <h2 id="workshop-fees-title">Workshop fees</h2>
            <div class="prose">
                <p>The pre-conference <a href="<?= e(href('workshops')) ?>">HFT and Derivative Pricing workshops</a> on Day 1 (Thursday 4 March) will run simultaneously. Participants should register for <strong>one workshop only</strong>.</p>
                <table class="data-table" aria-label="Pre-conference workshop fees by category">
                    <thead><tr><th scope="col">Category</th><th scope="col">Workshop only</th></tr></thead>
                    <tbody>
                        <?php foreach ($workshop_fees as [$category, $fee]): ?>
                        <tr><th scope="row"><?= e($category) ?></th><?= cell($fee) ?></tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="dates-title">
        <div class="wrap page-grid">
            <h2 id="dates-title">Deadlines and important dates</h2>
            <div class="prose">
                <table class="data-table" aria-label="Deadlines and important dates">
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
            <h2 id="stay-title">Accommodation and contact</h2>
            <div class="prose">
                <p>Accommodation, travel to IIT Bombay, and contact details are on the <a href="<?= e(href('venue')) ?>">venue &amp; contact</a> page. Questions about registration? Email <a href="mailto:<?= e($contact_email) ?>"><?= e($contact_email) ?></a>.</p>
            </div>
        </div>
    </section>

<?php site_footer(); ?>
<?php page_end(dialog_templates('registration'));
