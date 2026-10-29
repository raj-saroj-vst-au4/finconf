<?php
require __DIR__.'/includes/site.php';

page_start('papers', 'Call for papers — QRD 2027, IIT Bombay',
    'Call for papers and posters for QRD 2027, the Conference on Quant, Risk & Data: papers due 20 December 2026, poster abstracts due 15 January 2027. 4–6 March 2027 at VMCC, IIT Bombay.');
?>
    <section class="page-hero" <?= figure_attrs(2) ?> aria-labelledby="page-title">
        <div class="wrap">
            <h1 id="page-title" class="page-title" data-split><span class="line">Call for papers</span></h1>
            <div class="page-intro">
                <p class="lede">Present your research as a contributed talk or poster at QRD 2027, the Conference on Quant, Risk &amp; Data. Conference papers are due by 20 December 2026; poster abstracts are due by 15 January 2027.</p>
                <div class="actions"><?= action_button($submission_form_url, 'Submit a paper', 'submission') ?><a class="pill pill-line" href="#posters">Call for posters</a></div>
            </div>
        </div>
    </section>

    <section id="general" class="page-section" data-quiet aria-labelledby="general-title">
        <div class="wrap page-grid">
            <h2 id="general-title">General information</h2>
            <div class="prose">
                <p>We invite submissions for contributed talks and poster presentations at QRD 2027. The programme comprises a day of pre-conference workshops, followed by two days of keynotes, parallel technical sessions, paper presentations, and poster sessions.</p>
                <p>The scientific programme committee reviews each submission, determines whether it is accepted, and assigns accepted work to an oral or poster session. The committee's decisions are final.</p>

                <h3>Conference themes</h3>
                <dl class="facts-list facts-stack">
                    <?php foreach ($themes as [$theme, $areas]): ?>
                    <div><dt><?= e($theme) ?></dt><dd><?= e($areas) ?></dd></div>
                    <?php endforeach; ?>
                </dl>

                <h3>Key dates</h3>
                <table class="data-table" aria-label="Key dates">
                    <thead><tr><th scope="col">Activity</th><th scope="col">Date</th></tr></thead>
                    <tbody>
                        <?php foreach (['submission', 'decision', 'poster', 'poster_decision', 'early', 'registration', 'conference'] as $key): [$label, $when] = $dates[$key]; ?>
                        <tr><th scope="row"><?= e($label) ?></th><?= cell($when) ?></tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>

                <h3>Journal publication</h3>
                <div class="journal">
                    <div>
                        <p>Conference participants are encouraged to submit their work to the journal <a href="<?= e($journal_url) ?>" target="_blank" rel="noopener noreferrer"><cite><?= e($journal_name) ?></cite><span class="visually-hidden"> (opens in a new tab)</span></a> (ASMBI). This peer-reviewed Wiley journal brings together stochastic modelling and data analysis, with applications in business, finance, insurance, management, and production.</p>
                        <p>As the official journal of the <a href="https://isbis-isi.org/isbis/" target="_blank" rel="noopener noreferrer">International Society for Business and Industrial Statistics<span class="visually-hidden"> (opens in a new tab)</span></a>, ASMBI publishes mathematically rigorous articles featuring innovative stochastic modelling and sound applications in business and industry. The journal also welcomes suitable submissions for the Practitioner’s Corner and the Section on Data Science in Business and Industry.</p>
                        <p>For more details, see the <a href="<?= e($journal_url) ?>" target="_blank" rel="noopener noreferrer">journal’s page on Wiley Online Library<span class="visually-hidden"> (opens in a new tab)</span></a>.</p>
                    </div>
                    <?php if ($journal_cover !== '' && is_file(__DIR__.'/'.$journal_cover)): ?>
                    <figure class="journal-cover"><a href="<?= e($journal_url) ?>" target="_blank" rel="noopener noreferrer"><img src="<?= e($journal_cover) ?>" alt="Title page of <?= e($journal_name) ?>" loading="lazy" decoding="async"><span class="visually-hidden"> (opens in a new tab)</span></a></figure>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </section>

    <section id="papers" class="page-section" data-quiet aria-labelledby="papers-title">
        <div class="wrap page-grid">
            <h2 id="papers-title">Paper submission</h2>
            <div class="prose">
                <h3>How to submit</h3>
                <ol>
                    <li>Prepare your paper as a PDF.</li>
                    <li>If your paper includes code, publish it on GitHub or another public repository and include the link in your paper.</li>
                    <li>Upload the PDF through the Google Form.</li>
                </ol>
                <div class="actions"><?= action_button($submission_form_url, 'Submit a paper', 'submission') ?></div>
                <p class="fine"><?= $submission_form_url === '' ? 'The submission form will be linked here once submissions open.' : 'The Google Form opens in a new tab. The submission deadline is 20 December 2026.' ?></p>

                <h3 id="advice">Before you submit</h3>
                <ol type="a">
                    <?php foreach ($advice as $tip): ?>
                    <li><?= e($tip) ?></li>
                    <?php endforeach; ?>
                </ol>
            </div>
        </div>
    </section>

    <section id="presentation" class="page-section" data-quiet aria-labelledby="presentation-title">
        <div class="wrap page-grid">
            <h2 id="presentation-title">Paper presentation</h2>
            <div class="prose">
                <p>Accepted papers will be presented as contributed talks during the parallel technical sessions on Friday 5 and Saturday 6 March. Three tracks will run concurrently, with 45 minutes allocated to each session. Additional parallel paper-presentation sessions are scheduled for Saturday afternoon. The scientific programme committee will assign each accepted paper to a session; see the <a href="<?= e(href('program')) ?>">programme</a> for the schedule.</p>
                <p><strong>Contributed talks are for unpublished work only.</strong> A paper that has already been published can be presented only as a poster: see the <a href="#posters">poster presentation</a> section below.</p>
                <p>Conference registration covers oral paper presentations. Fees and deadlines are on the <a href="<?= e(href('registration')) ?>">registration</a> page.</p>
            </div>
        </div>
    </section>

    <section id="posters" class="page-section" data-quiet aria-labelledby="posters-title">
        <div class="wrap page-grid">
            <h2 id="posters-title">Poster presentation</h2>
            <div class="prose">
                <p>The Organising Committee invites researchers, academics, doctoral scholars, postgraduate students, and industry professionals to submit abstracts of original research for poster presentation.</p>
                <p>Poster abstracts are welcome across all conference themes, including mathematical finance, financial econometrics, market microstructure, quantitative trading, portfolio optimisation, risk management, and computational intelligence in finance. Presenters must bring a printed copy of their poster to the conference.</p>
                <div class="actions"><?= action_button($poster_form_url, 'Submit a poster abstract', 'submission') ?></div>

                <h3>Guidelines</h3>
                <ul>
                    <?php foreach ($poster_guidelines as $guideline): ?>
                    <li><?= e($guideline) ?></li>
                    <?php endforeach; ?>
                </ul>
                <p class="fine">Further instructions on formatting and presentation will be provided to authors of accepted abstracts.</p>

                <h3>Important dates</h3>
                <table class="data-table" aria-label="Important dates for poster presentations">
                    <thead><tr><th scope="col">Activity</th><th scope="col">Date</th></tr></thead>
                    <tbody>
                        <?php foreach ($poster_dates as [$label, $when]): ?>
                        <tr><th scope="row"><?= e($label) ?></th><?= cell($when) ?></tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

<?php site_footer(); ?>
<?php page_end(dialog_templates('submission'));
