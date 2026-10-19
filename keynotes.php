<?php
require __DIR__.'/includes/site.php';

page_start('keynotes', 'Keynotes — QRD 2027, IIT Bombay',
    'The two keynote addresses at QRD 2027, the International Conference on Quant, Risk and Data at VMCC, IIT Bombay, 4–6 March 2027.');
?>
    <section class="page-hero" <?= figure_attrs(2) ?> aria-labelledby="page-title">
        <div class="wrap">
            <?= page_kicker() ?>
            <h1 id="page-title" class="page-title" data-split><span class="line">Keynotes</span></h1>
            <div class="page-intro">
                <p class="lede">Two invited talks frame the conference: one on the leading edge of quantitative research, one on what moves electronic markets.</p>
            </div>
        </div>
    </section>

    <section id="keynotes" class="keynotes" data-quiet aria-labelledby="keynotes-title">
        <div class="wrap">
            <div class="column">
                <h2 id="keynotes-title">Two keynotes on where markets go next.</h2>
                <article class="keynote">
                    <p class="keynote-when">Keynote Address I, Friday 5 March, 09:45 AM</p>
                    <h3>Rethinking the possibilities of finance</h3>
                    <p>Ideas, models and open questions at the leading edge of quantitative research.</p>
                    <p class="keynote-speaker">Speaker to be announced</p>
                </article>
                <article class="keynote">
                    <p class="keynote-when">Keynote Address II, Saturday 6 March, 09:25 AM</p>
                    <h3>Understanding what moves markets</h3>
                    <p>Technology, market structure and the evolving landscape of electronic trading.</p>
                    <p class="keynote-speaker">Speaker to be announced</p>
                </article>
                <p class="fine">Keynote themes are indicative. The full schedule is in the <a href="<?= e(href('program')) ?>">programme</a>.</p>
            </div>
        </div>
    </section>

<?php site_footer(); ?>
<?php page_end();
