<?php
require __DIR__.'/includes/site.php';

page_start('committees', 'Committees — QRD 2027, IIT Bombay',
    'The organising committee, operations team, and scientific programme committee of QRD 2027, the Conference on Quant, Risk & Data at IIT Bombay, 4–6 March 2027.');
?>
    <section class="page-hero" <?= figure_attrs(2) ?> aria-labelledby="page-title">
        <div class="wrap">
            <h1 id="page-title" class="page-title" data-split><span class="line">Committees</span></h1>
            <div class="page-intro">
                <p class="lede">The people organising the conference at Citadel Lab, IIT Bombay, and the committee reviewing its papers.</p>
            </div>
        </div>
    </section>

    <section id="team" class="team" data-quiet aria-labelledby="team-title">
        <div class="wrap">
            <h2 id="team-title">Organising committee</h2>
            <?php if ($faculty): ?><ul class="faculty"><?php foreach ($faculty as $m) echo member($m, 'faculty'); ?></ul><?php endif; ?>
            <h2 id="students-title" class="team-group">Student organising committee</h2>
            <ul class="students" aria-labelledby="students-title"><?php foreach ($students as $m) echo member($m, 'student'); ?></ul>
            <?php if ($operations): ?>
            <h2 id="operations-title" class="team-group">Operations team</h2>
            <ul class="operations" aria-labelledby="operations-title"><?php foreach ($operations as $m) echo member($m, 'staff'); ?></ul>
            <?php endif; ?>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="spc-title">
        <div class="wrap page-grid">
            <h2 id="spc-title">Scientific programme committee</h2>
            <div class="prose">
                <p>The scientific programme committee reviews every submission to the <a href="<?= e(href('papers')) ?>">call for papers</a> and decides on acceptance and session allocation.</p>
                <?php if ($programme_committee): ?>
                <table class="data-table data-table-text" aria-label="Members of the scientific programme committee">
                    <thead><tr><th scope="col">Name</th><th scope="col">Affiliation</th></tr></thead>
                    <tbody>
                        <?php foreach ($programme_committee as $m): ?>
                        <tr><th scope="row"><?php if (($m['url'] ?? '') !== ''): ?><a href="<?= e($m['url']) ?>" target="_blank" rel="noopener noreferrer"><?= e($m['name']) ?><span class="visually-hidden"> (profile, opens in a new tab)</span></a><?php else: ?><?= e($m['name']) ?><?php endif; ?></th><td><?= e($m['affiliation']) ?></td></tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
                <?php else: ?>
                <p class="pending">Members will be announced.</p>
                <?php endif; ?>
            </div>
        </div>
    </section>

<?php site_footer(); ?>
<?php page_end();
