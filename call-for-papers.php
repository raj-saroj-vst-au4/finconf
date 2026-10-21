<?php
require __DIR__.'/includes/site.php';

page_start('papers', 'Call for papers — QRD 2027, IIT Bombay',
    'Call for papers and posters for QRD 2027, the Conference on Quant, Risk & Data: papers due 20 December 2026, poster abstracts due 15 January 2027. 4–6 March 2027 at VMCC, IIT Bombay.');
?>
    <section class="page-hero" <?= figure_attrs(2) ?> aria-labelledby="page-title">
        <div class="wrap">
            <?= page_kicker() ?>
            <h1 id="page-title" class="page-title" data-split><span class="line">Call for papers</span></h1>
            <div class="page-intro">
                <p class="lede">Present your research as a contributed talk or a poster at QRD 2027, the Conference on Quant, Risk &amp; Data. Conference papers are due by 20 December 2026; poster abstracts by 15 January 2027.</p>
                <div class="actions"><?= action_button($submission_form_url, 'Submit a paper', 'submission') ?><a class="pill pill-line" href="#posters">Call for posters</a></div>
            </div>
        </div>
    </section>

    <section id="general" class="page-section" data-quiet aria-labelledby="general-title">
        <div class="wrap page-grid">
            <h2 id="general-title">General information</h2>
            <div class="prose">
                <p>We invite papers for contributed talks and poster presentations at QRD 2027: a day of pre-conference workshops, followed by two days of keynotes, parallel technical sessions, paper presentations, and poster sessions.</p>
                <p>A scientific programme committee reviews every submission, decides whether it is accepted, and allocates it to a talk or a poster session. Its decision is final.</p>

                <h3>Conference themes</h3>
                <dl class="facts-list facts-stack">
                    <?php foreach ($themes as [$theme, $areas]): ?>
                    <div><dt><?= e($theme) ?></dt><dd><?= e($areas) ?></dd></div>
                    <?php endforeach; ?>
                </dl>

                <h3>Key dates</h3>
                <table class="data-table" aria-label="Key dates">
                    <thead><tr><th scope="col">Milestone</th><th scope="col">Date</th></tr></thead>
                    <tbody>
                        <?php foreach (['submission', 'decision', 'poster', 'poster_decision', 'early', 'registration', 'conference'] as $key): [$label, $when] = $dates[$key]; ?>
                        <tr><th scope="row"><?= e($label) ?></th><?= cell($when) ?></tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>

                <h3>Journal publication</h3>
                <div class="journal">
                    <div>
                        <p>Selected papers will be fast-tracked for publication in the journal <a href="<?= e($journal_url) ?>" target="_blank" rel="noopener noreferrer"><cite><?= e($journal_name) ?></cite> (ASMBI)<span class="visually-hidden"> (opens in a new tab)</span></a>, with minimal final review requirements.</p>
                        <p>There is no special issue: papers are selected from those presented at the conference.</p>
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
                    <li>If your work uses code, publish it on GitHub or another public repository, and give the link in the paper.</li>
                    <li>Upload the PDF through the Google Form by 20 December 2026.</li>
                </ol>
                <div class="actions"><?= action_button($submission_form_url, 'Submit a paper', 'submission') ?></div>
                <p class="fine"><?= $submission_form_url === '' ? 'The submission form opens when the call is announced.' : 'The Google Form opens in a new tab. Deadline: 20 December 2026.' ?></p>

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
                <p>Accepted papers are presented as contributed talks in the parallel technical sessions on Friday 5 and Saturday 6 March, where three tracks run side by side in 45-minute sessions, and in the parallel paper presentation sessions on the afternoon of Saturday 6 March. The scientific programme committee allocates each paper to a session; the schedule is in the <a href="<?= e(href('program')) ?>">programme</a>.</p>
                <p><strong>Contributed talks are for unpublished work only.</strong> A paper that has already been published can be presented only as a poster: see the <a href="#posters">poster presentation</a> section below.</p>
                <p>Conference registration covers oral paper presentations. Fees and deadlines are on the <a href="<?= e(href('registration')) ?>">registration</a> page.</p>
            </div>
        </div>
    </section>

    <section id="posters" class="page-section" data-quiet aria-labelledby="posters-title">
        <div class="wrap page-grid">
            <h2 id="posters-title">Poster presentation</h2>
            <div class="prose">
                <p>The Organising Committee invites researchers, academicians, doctoral scholars, postgraduate students, and industry professionals to submit original research abstracts for poster presentations.</p>
                <p>Poster submissions are welcome across all conference themes, including mathematical finance, financial econometrics, market microstructure, quantitative trading, portfolio optimisation, risk management, and computational intelligence in finance.</p>
                <div class="actions"><?= action_button($poster_form_url, 'Submit a poster abstract', 'submission') ?></div>

                <h3>Guidelines</h3>
                <ul>
                    <?php foreach ($poster_guidelines as $guideline): ?>
                    <li><?= e($guideline) ?></li>
                    <?php endforeach; ?>
                </ul>
                <p class="fine">Further instructions on formatting and presentation will be communicated to accepted authors.</p>

                <h3>Important dates</h3>
                <table class="data-table" aria-label="Important dates for poster presentations">
                    <thead><tr><th scope="col">Milestone</th><th scope="col">Date</th></tr></thead>
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
