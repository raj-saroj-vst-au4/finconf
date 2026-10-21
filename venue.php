<?php
require __DIR__.'/includes/site.php';

page_start('venue', 'Venue & contact — QRD 2027, IIT Bombay',
    'Venue, accommodation, and contact details for QRD 2027, the Conference on Quant, Risk & Data, 4–6 March 2027 at the Victor Menezes Convention Centre (VMCC), IIT Bombay, Powai, Mumbai.');
?>
    <section class="page-hero" <?= figure_attrs(0) ?> aria-labelledby="page-title">
        <div class="wrap">
            <?= page_kicker() ?>
            <h1 id="page-title" class="page-title" data-split><span class="line">Venue &amp; contact</span></h1>
            <div class="page-intro">
                <p class="lede">The conference takes place at the Victor Menezes Convention Centre (VMCC), on the IIT Bombay campus in Powai, Mumbai. Below: getting there, accommodation, and how to reach the organisers.</p>
                <div class="actions"><a class="pill pill-line" href="#stay">Accommodation</a><a class="pill pill-line" href="#contact">Contact</a></div>
            </div>
        </div>
    </section>

    <section id="venue" class="venue" data-quiet aria-labelledby="venue-title">
        <div class="wrap venue-grid">
            <div class="venue-copy">
                <h2 id="venue-title">Victor Menezes Convention Centre</h2>
                <p class="lede">One auditorium, three days, and plenty of room for the conversations that continue after each session.</p>
                <address>VMCC, IIT Bombay, Powai<br>Mumbai, Maharashtra, India</address>
                <a class="pill pill-line" href="https://www.google.com/maps/search/?api=1&amp;query=Victor+Menezes+Convention+Centre+IIT+Bombay" target="_blank" rel="noopener noreferrer">Get directions<span class="visually-hidden"> (opens Google Maps in a new tab)</span></a>
            </div>
            <div class="venue-photos">
                <figure class="photo photo-main"><a href="assets/images/vmcc-auditorium.webp" target="_blank" rel="noopener noreferrer"><img src="assets/images/vmcc-auditorium.webp" width="680" height="510" loading="lazy" decoding="async" alt="VMCC auditorium with tiered blue seating facing the stage and presentation screens."></a><figcaption>The auditorium</figcaption></figure>
                <figure class="photo photo-side"><a href="assets/images/vmcc-entrance.webp" target="_blank" rel="noopener noreferrer"><img src="assets/images/vmcc-entrance.webp" width="382" height="510" loading="lazy" decoding="async" alt="Victor Menezes Convention Centre entrance with the venue name and IIT Bombay crest."></a><figcaption>The entrance</figcaption></figure>
            </div>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="travel-title">
        <div class="wrap page-grid">
            <h2 id="travel-title">Getting there</h2>
            <dl class="prose facts-list">
                <div><dt>By air</dt><dd>Chhatrapati Shivaji Maharaj International Airport (BOM) is Mumbai’s airport and the nearest to IIT Bombay.</dd></div>
                <div><dt>By suburban rail</dt><dd>The nearest stations are Kanjurmarg and Vikhroli on the Central line.</dd></div>
                <div><dt>On campus</dt><dd>VMCC is inside the IIT Bombay campus in Powai. Use “Get directions” above to reach the building.</dd></div>
            </dl>
        </div>
    </section>

    <section id="stay" class="page-section" data-quiet aria-labelledby="stay-title">
        <div class="wrap page-grid">
            <h2 id="stay-title">Accommodation</h2>
            <div class="prose">
                <p>Accommodation options, including any on-campus accommodation for students and nearby hotels, will be announced by the organisers.</p>
                <p>Fees and registration dates are on the <a href="<?= e(href('registration')) ?>">registration</a> page.</p>
            </div>
        </div>
    </section>

    <section id="contact" class="page-section" data-quiet aria-labelledby="contact-title">
        <div class="wrap page-grid">
            <h2 id="contact-title">Contact</h2>
            <dl class="prose facts-list">
                <div><dt>Email</dt><dd><a href="mailto:<?= e($contact_email) ?>"><?= e($contact_email) ?></a></dd></div>
                <div><dt>Write to us about</dt><dd>Any questions or issues: paper and poster submissions, registration and payment, the workshops, travel, or accommodation.</dd></div>
                <div><dt>Organisers</dt><dd>Citadel Lab, IIT Bombay, jointly with RTQF, IISc Bangalore. See the <a href="<?= e(href('committees')) ?>">committees</a>.</dd></div>
            </dl>
        </div>
    </section>

<?php site_footer(); ?>
<?php page_end();
