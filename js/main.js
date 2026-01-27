
// Master JS for State: RN - Persona: Dune Beach Explorer
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 700;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const rn_index_section_immigrate_to_rio_grande_do_norte = document.getElementById('rn-index-section-immigrate-to-rio-grande-do-norte');
  if (rn_index_section_immigrate_to_rio_grande_do_norte) {
    gsap.fromTo('#rn-index-section-immigrate-to-rio-grande-do-norte', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_form_immigrate_to_rio_grande_do_norte = document.getElementById('rn-index-form-immigrate-to-rio-grande-do-norte');
  if (rn_index_form_immigrate_to_rio_grande_do_norte) {
    gsap.from('#rn-index-form-immigrate-to-rio-grande-do-norte input, #rn-index-form-immigrate-to-rio-grande-do-norte textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_section_state_vibe = document.getElementById('rn-index-section-state-vibe');
  if (rn_index_section_state_vibe) {
    gsap.fromTo('#rn-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_section_quick_facts_snapshot = document.getElementById('rn-index-section-quick-facts-snapshot');
  if (rn_index_section_quick_facts_snapshot) {
    gsap.fromTo('#rn-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_section_rio_grande_do_norte_map = document.getElementById('rn-index-section-rio-grande-do-norte-map');
  if (rn_index_section_rio_grande_do_norte_map) {
    gsap.fromTo('#rn-index-section-rio-grande-do-norte-map', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_section_cost_of_living_rio_grande_do_norte = document.getElementById('rn-index-section-cost-of-living-rio-grande-do-norte');
  if (rn_index_section_cost_of_living_rio_grande_do_norte) {
    gsap.fromTo('#rn-index-section-cost-of-living-rio-grande-do-norte', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_section_government_context = document.getElementById('rn-index-section-government-context');
  if (rn_index_section_government_context) {
    gsap.fromTo('#rn-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_hero_immigration_notes = document.getElementById('rn-index-hero-immigration-notes');
  if (rn_index_hero_immigration_notes) {
    gsap.fromTo('#rn-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_list_common_applicant_profiles = document.getElementById('rn-index-list-common-applicant-profiles');
  if (rn_index_list_common_applicant_profiles) {
    gsap.from('#rn-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_list_economic_drivers = document.getElementById('rn-index-list-economic-drivers');
  if (rn_index_list_economic_drivers) {
    gsap.from('#rn-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_section_demographics = document.getElementById('rn-index-section-demographics');
  if (rn_index_section_demographics) {
    gsap.fromTo('#rn-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_section_regional_challenges = document.getElementById('rn-index-section-regional-challenges');
  if (rn_index_section_regional_challenges) {
    gsap.fromTo('#rn-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_section_regional_opportunities = document.getElementById('rn-index-section-regional-opportunities');
  if (rn_index_section_regional_opportunities) {
    gsap.fromTo('#rn-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_section_culture_daily_life = document.getElementById('rn-index-section-culture-daily-life');
  if (rn_index_section_culture_daily_life) {
    gsap.fromTo('#rn-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_list_local_language_expressions = document.getElementById('rn-index-list-local-language-expressions');
  if (rn_index_list_local_language_expressions) {
    gsap.from('#rn-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_list_food_cuisine = document.getElementById('rn-index-list-food-cuisine');
  if (rn_index_list_food_cuisine) {
    gsap.from('#rn-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_list_festivals_traditions = document.getElementById('rn-index-list-festivals-traditions');
  if (rn_index_list_festivals_traditions) {
    gsap.from('#rn-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_list_music_artistic_expression = document.getElementById('rn-index-list-music-artistic-expression');
  if (rn_index_list_music_artistic_expression) {
    gsap.from('#rn-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_list_sports_recreation = document.getElementById('rn-index-list-sports-recreation');
  if (rn_index_list_sports_recreation) {
    gsap.from('#rn-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_list_landmarks_historical_sites = document.getElementById('rn-index-list-landmarks-historical-sites');
  if (rn_index_list_landmarks_historical_sites) {
    gsap.from('#rn-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_list_natural_features = document.getElementById('rn-index-list-natural-features');
  if (rn_index_list_natural_features) {
    gsap.from('#rn-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_list_parks_protected_areas = document.getElementById('rn-index-list-parks-protected-areas');
  if (rn_index_list_parks_protected_areas) {
    gsap.from('#rn-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_list_museums_cultural_institutions = document.getElementById('rn-index-list-museums-cultural-institutions');
  if (rn_index_list_museums_cultural_institutions) {
    gsap.from('#rn-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_section_image_gallery = document.getElementById('rn-index-section-image-gallery');
  if (rn_index_section_image_gallery) {
    gsap.fromTo('#rn-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_section_useful_government_links = document.getElementById('rn-index-section-useful-government-links');
  if (rn_index_section_useful_government_links) {
    gsap.fromTo('#rn-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_hero_federal_police_immigration_links = document.getElementById('rn-index-hero-federal-police-immigration-links');
  if (rn_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#rn-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_section_external_references = document.getElementById('rn-index-section-external-references');
  if (rn_index_section_external_references) {
    gsap.fromTo('#rn-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_list_immigration_services_overview = document.getElementById('rn-index-list-immigration-services-overview');
  if (rn_index_list_immigration_services_overview) {
    gsap.from('#rn-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_section_why_immigrate_here = document.getElementById('rn-index-section-why-immigrate-here');
  if (rn_index_section_why_immigrate_here) {
    gsap.fromTo('#rn-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_section_legal_guidance_disclaimers = document.getElementById('rn-index-section-legal-guidance-disclaimers');
  if (rn_index_section_legal_guidance_disclaimers) {
    gsap.fromTo('#rn-index-section-legal-guidance-disclaimers', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_list_travel_services = document.getElementById('rn-index-list-travel-services');
  if (rn_index_list_travel_services) {
    gsap.from('#rn-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_list_how_the_process_works = document.getElementById('rn-index-list-how-the-process-works');
  if (rn_index_list_how_the_process_works) {
    gsap.from('#rn-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_index_section__frequently_asked_questions_about_living_in_rio_grande_do_norte_ = document.getElementById('rn-index-section--frequently-asked-questions-about-living-in-rio-grande-do-norte-');
  if (rn_index_section__frequently_asked_questions_about_living_in_rio_grande_do_norte_) {
    gsap.fromTo('#rn-index-section--frequently-asked-questions-about-living-in-rio-grande-do-norte-', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_contactcta_section_get_started_in_rio_grande_do_norte = document.getElementById('rn-contactcta-section-get-started-in-rio-grande-do-norte');
  if (rn_contactcta_section_get_started_in_rio_grande_do_norte) {
    gsap.fromTo('#rn-contactcta-section-get-started-in-rio-grande-do-norte', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('rn-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (rn_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#rn-renouncingcitizenship-form-renounce-brazilian-citizenship input, #rn-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_list_quick_facts = document.getElementById('rn-renouncingcitizenship-list-quick-facts');
  if (rn_renouncingcitizenship_list_quick_facts) {
    gsap.from('#rn-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('rn-renouncingcitizenship-list-common-challenges-applicants-face');
  if (rn_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#rn-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('rn-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (rn_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#rn-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_section_renunciation_overview = document.getElementById('rn-renouncingcitizenship-section-renunciation-overview');
  if (rn_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#rn-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_form_who_is_this_for = document.getElementById('rn-renouncingcitizenship-form-who-is-this-for');
  if (rn_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#rn-renouncingcitizenship-form-who-is-this-for input, #rn-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_list_required_documents = document.getElementById('rn-renouncingcitizenship-list-required-documents');
  if (rn_renouncingcitizenship_list_required_documents) {
    gsap.from('#rn-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_list_process = document.getElementById('rn-renouncingcitizenship-list-process');
  if (rn_renouncingcitizenship_list_process) {
    gsap.from('#rn-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_section_timelines_deadlines = document.getElementById('rn-renouncingcitizenship-section-timelines-deadlines');
  if (rn_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#rn-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_section_fees_costs = document.getElementById('rn-renouncingcitizenship-section-fees-costs');
  if (rn_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#rn-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('rn-renouncingcitizenship-list-risks-common-mistakes');
  if (rn_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#rn-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('rn-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (rn_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_section_rio_grande_do_norte_specific_context = document.getElementById('rn-renouncingcitizenship-section-rio-grande-do-norte-specific-context');
  if (rn_renouncingcitizenship_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-renouncingcitizenship-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_section_what_our_clients_say = document.getElementById('rn-renouncingcitizenship-section-what-our-clients-say');
  if (rn_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#rn-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('rn-renouncingcitizenship-section-frequently-asked-questions');
  if (rn_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#rn-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_section_international_support = document.getElementById('rn-renouncingcitizenship-section-international-support');
  if (rn_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#rn-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_list_our_credentials = document.getElementById('rn-renouncingcitizenship-list-our-credentials');
  if (rn_renouncingcitizenship_list_our_credentials) {
    gsap.from('#rn-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_list_related_services = document.getElementById('rn-renouncingcitizenship-list-related-services');
  if (rn_renouncingcitizenship_list_related_services) {
    gsap.from('#rn-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('rn-renouncingcitizenship-section-youre-in-good-hands');
  if (rn_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#rn-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_renouncingcitizenship_section_21 = document.getElementById('rn-renouncingcitizenship-section-21');
  if (rn_renouncingcitizenship_section_21) {
    gsap.fromTo('#rn-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('rn-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (rn_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#rn-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #rn-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_list_quick_facts = document.getElementById('rn-provisional-list-quick-facts');
  if (rn_provisional_list_quick_facts) {
    gsap.from('#rn-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_list_common_challenges_applicants_face = document.getElementById('rn-provisional-list-common-challenges-applicants-face');
  if (rn_provisional_list_common_challenges_applicants_face) {
    gsap.from('#rn-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_list_how_we_solve_these_challenges = document.getElementById('rn-provisional-list-how-we-solve-these-challenges');
  if (rn_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#rn-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_section_naturalisation_overview = document.getElementById('rn-provisional-section-naturalisation-overview');
  if (rn_provisional_section_naturalisation_overview) {
    gsap.fromTo('#rn-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_form_who_is_this_naturalisation_for = document.getElementById('rn-provisional-form-who-is-this-naturalisation-for');
  if (rn_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#rn-provisional-form-who-is-this-naturalisation-for input, #rn-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_list_required_documents = document.getElementById('rn-provisional-list-required-documents');
  if (rn_provisional_list_required_documents) {
    gsap.from('#rn-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_list_application_process = document.getElementById('rn-provisional-list-application-process');
  if (rn_provisional_list_application_process) {
    gsap.from('#rn-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_section_timelines_deadlines = document.getElementById('rn-provisional-section-timelines-deadlines');
  if (rn_provisional_section_timelines_deadlines) {
    gsap.fromTo('#rn-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_section_fees_costs = document.getElementById('rn-provisional-section-fees-costs');
  if (rn_provisional_section_fees_costs) {
    gsap.fromTo('#rn-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_list_risks_common_mistakes = document.getElementById('rn-provisional-list-risks-common-mistakes');
  if (rn_provisional_list_risks_common_mistakes) {
    gsap.from('#rn-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_section_diy_vs_professional_assistance = document.getElementById('rn-provisional-section-diy-vs-professional-assistance');
  if (rn_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_section_rio_grande_do_norte_specific_context = document.getElementById('rn-provisional-section-rio-grande-do-norte-specific-context');
  if (rn_provisional_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-provisional-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_section_what_our_clients_say = document.getElementById('rn-provisional-section-what-our-clients-say');
  if (rn_provisional_section_what_our_clients_say) {
    gsap.fromTo('#rn-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_section_frequently_asked_questions = document.getElementById('rn-provisional-section-frequently-asked-questions');
  if (rn_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#rn-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_section_international_support = document.getElementById('rn-provisional-section-international-support');
  if (rn_provisional_section_international_support) {
    gsap.fromTo('#rn-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_list_our_credentials = document.getElementById('rn-provisional-list-our-credentials');
  if (rn_provisional_list_our_credentials) {
    gsap.from('#rn-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_list_related_services = document.getElementById('rn-provisional-list-related-services');
  if (rn_provisional_list_related_services) {
    gsap.from('#rn-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_section_youre_in_good_hands = document.getElementById('rn-provisional-section-youre-in-good-hands');
  if (rn_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#rn-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_provisional_section_21 = document.getElementById('rn-provisional-section-21');
  if (rn_provisional_section_21) {
    gsap.fromTo('#rn-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('rn-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (rn_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#rn-special-form-special-naturalisation-in-brazil-for-particular-cases input, #rn-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_list_quick_facts = document.getElementById('rn-special-list-quick-facts');
  if (rn_special_list_quick_facts) {
    gsap.from('#rn-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_list_common_challenges_applicants_face = document.getElementById('rn-special-list-common-challenges-applicants-face');
  if (rn_special_list_common_challenges_applicants_face) {
    gsap.from('#rn-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_list_how_we_solve_these_challenges = document.getElementById('rn-special-list-how-we-solve-these-challenges');
  if (rn_special_list_how_we_solve_these_challenges) {
    gsap.from('#rn-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_section_naturalisation_overview = document.getElementById('rn-special-section-naturalisation-overview');
  if (rn_special_section_naturalisation_overview) {
    gsap.fromTo('#rn-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_form_who_is_this_naturalisation_for = document.getElementById('rn-special-form-who-is-this-naturalisation-for');
  if (rn_special_form_who_is_this_naturalisation_for) {
    gsap.from('#rn-special-form-who-is-this-naturalisation-for input, #rn-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_list_required_documents = document.getElementById('rn-special-list-required-documents');
  if (rn_special_list_required_documents) {
    gsap.from('#rn-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_list_application_process = document.getElementById('rn-special-list-application-process');
  if (rn_special_list_application_process) {
    gsap.from('#rn-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_section_timelines_deadlines = document.getElementById('rn-special-section-timelines-deadlines');
  if (rn_special_section_timelines_deadlines) {
    gsap.fromTo('#rn-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_section_fees_costs = document.getElementById('rn-special-section-fees-costs');
  if (rn_special_section_fees_costs) {
    gsap.fromTo('#rn-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_list_risks_common_mistakes = document.getElementById('rn-special-list-risks-common-mistakes');
  if (rn_special_list_risks_common_mistakes) {
    gsap.from('#rn-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_section_diy_vs_professional_assistance = document.getElementById('rn-special-section-diy-vs-professional-assistance');
  if (rn_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_section_rio_grande_do_norte_specific_context = document.getElementById('rn-special-section-rio-grande-do-norte-specific-context');
  if (rn_special_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-special-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_section_what_our_clients_say = document.getElementById('rn-special-section-what-our-clients-say');
  if (rn_special_section_what_our_clients_say) {
    gsap.fromTo('#rn-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_section_frequently_asked_questions = document.getElementById('rn-special-section-frequently-asked-questions');
  if (rn_special_section_frequently_asked_questions) {
    gsap.fromTo('#rn-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_section_international_support = document.getElementById('rn-special-section-international-support');
  if (rn_special_section_international_support) {
    gsap.fromTo('#rn-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_list_our_credentials = document.getElementById('rn-special-list-our-credentials');
  if (rn_special_list_our_credentials) {
    gsap.from('#rn-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_list_related_services = document.getElementById('rn-special-list-related-services');
  if (rn_special_list_related_services) {
    gsap.from('#rn-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_section_youre_in_good_hands = document.getElementById('rn-special-section-youre-in-good-hands');
  if (rn_special_section_youre_in_good_hands) {
    gsap.fromTo('#rn-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_special_section_21 = document.getElementById('rn-special-section-21');
  if (rn_special_section_21) {
    gsap.fromTo('#rn-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('rn-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (rn_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#rn-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #rn-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_list_quick_facts = document.getElementById('rn-ordinary-list-quick-facts');
  if (rn_ordinary_list_quick_facts) {
    gsap.from('#rn-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_list_common_challenges_applicants_face = document.getElementById('rn-ordinary-list-common-challenges-applicants-face');
  if (rn_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#rn-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_list_how_we_solve_these_challenges = document.getElementById('rn-ordinary-list-how-we-solve-these-challenges');
  if (rn_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#rn-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_section_naturalisation_overview = document.getElementById('rn-ordinary-section-naturalisation-overview');
  if (rn_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#rn-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_form_who_is_this_naturalisation_for = document.getElementById('rn-ordinary-form-who-is-this-naturalisation-for');
  if (rn_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#rn-ordinary-form-who-is-this-naturalisation-for input, #rn-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_list_required_documents = document.getElementById('rn-ordinary-list-required-documents');
  if (rn_ordinary_list_required_documents) {
    gsap.from('#rn-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_list_application_process = document.getElementById('rn-ordinary-list-application-process');
  if (rn_ordinary_list_application_process) {
    gsap.from('#rn-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_section_timelines_deadlines = document.getElementById('rn-ordinary-section-timelines-deadlines');
  if (rn_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#rn-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_section_fees_costs = document.getElementById('rn-ordinary-section-fees-costs');
  if (rn_ordinary_section_fees_costs) {
    gsap.fromTo('#rn-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_list_risks_common_mistakes = document.getElementById('rn-ordinary-list-risks-common-mistakes');
  if (rn_ordinary_list_risks_common_mistakes) {
    gsap.from('#rn-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_section_diy_vs_professional_assistance = document.getElementById('rn-ordinary-section-diy-vs-professional-assistance');
  if (rn_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_section_rio_grande_do_norte_specific_context = document.getElementById('rn-ordinary-section-rio-grande-do-norte-specific-context');
  if (rn_ordinary_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-ordinary-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_section_what_our_clients_say = document.getElementById('rn-ordinary-section-what-our-clients-say');
  if (rn_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#rn-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_section_frequently_asked_questions = document.getElementById('rn-ordinary-section-frequently-asked-questions');
  if (rn_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#rn-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_section_international_support = document.getElementById('rn-ordinary-section-international-support');
  if (rn_ordinary_section_international_support) {
    gsap.fromTo('#rn-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_list_our_credentials = document.getElementById('rn-ordinary-list-our-credentials');
  if (rn_ordinary_list_our_credentials) {
    gsap.from('#rn-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_list_related_services = document.getElementById('rn-ordinary-list-related-services');
  if (rn_ordinary_list_related_services) {
    gsap.from('#rn-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_section_youre_in_good_hands = document.getElementById('rn-ordinary-section-youre-in-good-hands');
  if (rn_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#rn-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_ordinary_section_21 = document.getElementById('rn-ordinary-section-21');
  if (rn_ordinary_section_21) {
    gsap.fromTo('#rn-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('rn-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (rn_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#rn-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #rn-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_list_quick_facts = document.getElementById('rn-extraordinary-list-quick-facts');
  if (rn_extraordinary_list_quick_facts) {
    gsap.from('#rn-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_list_common_challenges_applicants_face = document.getElementById('rn-extraordinary-list-common-challenges-applicants-face');
  if (rn_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#rn-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_list_how_we_solve_these_challenges = document.getElementById('rn-extraordinary-list-how-we-solve-these-challenges');
  if (rn_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#rn-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_section_naturalisation_overview = document.getElementById('rn-extraordinary-section-naturalisation-overview');
  if (rn_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#rn-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('rn-extraordinary-form-who-is-this-naturalisation-for');
  if (rn_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#rn-extraordinary-form-who-is-this-naturalisation-for input, #rn-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_list_required_documents = document.getElementById('rn-extraordinary-list-required-documents');
  if (rn_extraordinary_list_required_documents) {
    gsap.from('#rn-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_list_application_process = document.getElementById('rn-extraordinary-list-application-process');
  if (rn_extraordinary_list_application_process) {
    gsap.from('#rn-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_section_timelines_deadlines = document.getElementById('rn-extraordinary-section-timelines-deadlines');
  if (rn_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#rn-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_section_fees_costs = document.getElementById('rn-extraordinary-section-fees-costs');
  if (rn_extraordinary_section_fees_costs) {
    gsap.fromTo('#rn-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_list_risks_common_mistakes = document.getElementById('rn-extraordinary-list-risks-common-mistakes');
  if (rn_extraordinary_list_risks_common_mistakes) {
    gsap.from('#rn-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_section_diy_vs_professional_assistance = document.getElementById('rn-extraordinary-section-diy-vs-professional-assistance');
  if (rn_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_section_rio_grande_do_norte_specific_context = document.getElementById('rn-extraordinary-section-rio-grande-do-norte-specific-context');
  if (rn_extraordinary_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-extraordinary-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_section_what_our_clients_say = document.getElementById('rn-extraordinary-section-what-our-clients-say');
  if (rn_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#rn-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_section_frequently_asked_questions = document.getElementById('rn-extraordinary-section-frequently-asked-questions');
  if (rn_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#rn-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_section_international_support = document.getElementById('rn-extraordinary-section-international-support');
  if (rn_extraordinary_section_international_support) {
    gsap.fromTo('#rn-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_list_our_credentials = document.getElementById('rn-extraordinary-list-our-credentials');
  if (rn_extraordinary_list_our_credentials) {
    gsap.from('#rn-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_list_related_services = document.getElementById('rn-extraordinary-list-related-services');
  if (rn_extraordinary_list_related_services) {
    gsap.from('#rn-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_section_youre_in_good_hands = document.getElementById('rn-extraordinary-section-youre-in-good-hands');
  if (rn_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#rn-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extraordinary_section_21 = document.getElementById('rn-extraordinary-section-21');
  if (rn_extraordinary_section_21) {
    gsap.fromTo('#rn-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('rn-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (rn_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#rn-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #rn-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_list_quick_facts = document.getElementById('rn-reacquisitioncitizenship-list-quick-facts');
  if (rn_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#rn-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('rn-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (rn_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#rn-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('rn-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (rn_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#rn-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('rn-reacquisitioncitizenship-section-reacquisition-overview');
  if (rn_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#rn-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('rn-reacquisitioncitizenship-form-who-is-this-for');
  if (rn_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#rn-reacquisitioncitizenship-form-who-is-this-for input, #rn-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_list_required_documents = document.getElementById('rn-reacquisitioncitizenship-list-required-documents');
  if (rn_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#rn-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_list_process = document.getElementById('rn-reacquisitioncitizenship-list-process');
  if (rn_reacquisitioncitizenship_list_process) {
    gsap.from('#rn-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('rn-reacquisitioncitizenship-section-timelines-deadlines');
  if (rn_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#rn-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_section_fees_costs = document.getElementById('rn-reacquisitioncitizenship-section-fees-costs');
  if (rn_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#rn-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('rn-reacquisitioncitizenship-list-risks-common-mistakes');
  if (rn_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#rn-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('rn-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (rn_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_section_rio_grande_do_norte_specific_context = document.getElementById('rn-reacquisitioncitizenship-section-rio-grande-do-norte-specific-context');
  if (rn_reacquisitioncitizenship_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-reacquisitioncitizenship-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('rn-reacquisitioncitizenship-section-what-our-clients-say');
  if (rn_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#rn-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('rn-reacquisitioncitizenship-section-frequently-asked-questions');
  if (rn_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#rn-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_section_international_support = document.getElementById('rn-reacquisitioncitizenship-section-international-support');
  if (rn_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#rn-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_list_our_credentials = document.getElementById('rn-reacquisitioncitizenship-list-our-credentials');
  if (rn_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#rn-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_list_related_services = document.getElementById('rn-reacquisitioncitizenship-list-related-services');
  if (rn_reacquisitioncitizenship_list_related_services) {
    gsap.from('#rn-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('rn-reacquisitioncitizenship-section-youre-in-good-hands');
  if (rn_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#rn-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_reacquisitioncitizenship_section_21 = document.getElementById('rn-reacquisitioncitizenship-section-21');
  if (rn_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#rn-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('rn-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (rn_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#rn-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #rn-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_list_quick_facts = document.getElementById('rn-scientificresearch-list-quick-facts');
  if (rn_scientificresearch_list_quick_facts) {
    gsap.from('#rn-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_list_common_challenges_applicants_face = document.getElementById('rn-scientificresearch-list-common-challenges-applicants-face');
  if (rn_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#rn-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('rn-scientificresearch-list-how-we-solve-these-challenges');
  if (rn_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#rn-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_section_residency_overview = document.getElementById('rn-scientificresearch-section-residency-overview');
  if (rn_scientificresearch_section_residency_overview) {
    gsap.fromTo('#rn-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_form_who_is_this_residency_for = document.getElementById('rn-scientificresearch-form-who-is-this-residency-for');
  if (rn_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#rn-scientificresearch-form-who-is-this-residency-for input, #rn-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_list_required_documents = document.getElementById('rn-scientificresearch-list-required-documents');
  if (rn_scientificresearch_list_required_documents) {
    gsap.from('#rn-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_list_application_process = document.getElementById('rn-scientificresearch-list-application-process');
  if (rn_scientificresearch_list_application_process) {
    gsap.from('#rn-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_section_timelines_deadlines = document.getElementById('rn-scientificresearch-section-timelines-deadlines');
  if (rn_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#rn-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_section_fees_costs = document.getElementById('rn-scientificresearch-section-fees-costs');
  if (rn_scientificresearch_section_fees_costs) {
    gsap.fromTo('#rn-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_list_risks_common_mistakes = document.getElementById('rn-scientificresearch-list-risks-common-mistakes');
  if (rn_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#rn-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('rn-scientificresearch-section-diy-vs-professional-assistance');
  if (rn_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_section_rio_grande_do_norte_specific_context = document.getElementById('rn-scientificresearch-section-rio-grande-do-norte-specific-context');
  if (rn_scientificresearch_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-scientificresearch-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_section_what_our_clients_say = document.getElementById('rn-scientificresearch-section-what-our-clients-say');
  if (rn_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#rn-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_section_frequently_asked_questions = document.getElementById('rn-scientificresearch-section-frequently-asked-questions');
  if (rn_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#rn-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_section_international_support = document.getElementById('rn-scientificresearch-section-international-support');
  if (rn_scientificresearch_section_international_support) {
    gsap.fromTo('#rn-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_list_our_credentials = document.getElementById('rn-scientificresearch-list-our-credentials');
  if (rn_scientificresearch_list_our_credentials) {
    gsap.from('#rn-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_list_related_services = document.getElementById('rn-scientificresearch-list-related-services');
  if (rn_scientificresearch_list_related_services) {
    gsap.from('#rn-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_section_youre_in_good_hands = document.getElementById('rn-scientificresearch-section-youre-in-good-hands');
  if (rn_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#rn-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_scientificresearch_section_21 = document.getElementById('rn-scientificresearch-section-21');
  if (rn_scientificresearch_section_21) {
    gsap.fromTo('#rn-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_form_study_in_brazil_with_study_residency = document.getElementById('rn-study-form-study-in-brazil-with-study-residency');
  if (rn_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#rn-study-form-study-in-brazil-with-study-residency input, #rn-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_list_quick_facts = document.getElementById('rn-study-list-quick-facts');
  if (rn_study_list_quick_facts) {
    gsap.from('#rn-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_list_common_challenges_applicants_face = document.getElementById('rn-study-list-common-challenges-applicants-face');
  if (rn_study_list_common_challenges_applicants_face) {
    gsap.from('#rn-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_list_how_we_solve_these_challenges = document.getElementById('rn-study-list-how-we-solve-these-challenges');
  if (rn_study_list_how_we_solve_these_challenges) {
    gsap.from('#rn-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_section_residency_overview = document.getElementById('rn-study-section-residency-overview');
  if (rn_study_section_residency_overview) {
    gsap.fromTo('#rn-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_form_who_is_this_residency_for = document.getElementById('rn-study-form-who-is-this-residency-for');
  if (rn_study_form_who_is_this_residency_for) {
    gsap.from('#rn-study-form-who-is-this-residency-for input, #rn-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_list_required_documents = document.getElementById('rn-study-list-required-documents');
  if (rn_study_list_required_documents) {
    gsap.from('#rn-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_list_application_process = document.getElementById('rn-study-list-application-process');
  if (rn_study_list_application_process) {
    gsap.from('#rn-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_section_timelines_deadlines = document.getElementById('rn-study-section-timelines-deadlines');
  if (rn_study_section_timelines_deadlines) {
    gsap.fromTo('#rn-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_section_fees_costs = document.getElementById('rn-study-section-fees-costs');
  if (rn_study_section_fees_costs) {
    gsap.fromTo('#rn-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_list_risks_common_mistakes = document.getElementById('rn-study-list-risks-common-mistakes');
  if (rn_study_list_risks_common_mistakes) {
    gsap.from('#rn-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_section_diy_vs_professional_assistance = document.getElementById('rn-study-section-diy-vs-professional-assistance');
  if (rn_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_section_rio_grande_do_norte_specific_context = document.getElementById('rn-study-section-rio-grande-do-norte-specific-context');
  if (rn_study_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-study-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_section_what_our_clients_say = document.getElementById('rn-study-section-what-our-clients-say');
  if (rn_study_section_what_our_clients_say) {
    gsap.fromTo('#rn-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_section_frequently_asked_questions = document.getElementById('rn-study-section-frequently-asked-questions');
  if (rn_study_section_frequently_asked_questions) {
    gsap.fromTo('#rn-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_section_international_support = document.getElementById('rn-study-section-international-support');
  if (rn_study_section_international_support) {
    gsap.fromTo('#rn-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_list_our_credentials = document.getElementById('rn-study-list-our-credentials');
  if (rn_study_list_our_credentials) {
    gsap.from('#rn-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_list_related_services = document.getElementById('rn-study-list-related-services');
  if (rn_study_list_related_services) {
    gsap.from('#rn-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_section_youre_in_good_hands = document.getElementById('rn-study-section-youre-in-good-hands');
  if (rn_study_section_youre_in_good_hands) {
    gsap.fromTo('#rn-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_study_section_21 = document.getElementById('rn-study-section-21');
  if (rn_study_section_21) {
    gsap.fromTo('#rn-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('rn-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (rn_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#rn-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #rn-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_list_quick_facts = document.getElementById('rn-educationalexchange-list-quick-facts');
  if (rn_educationalexchange_list_quick_facts) {
    gsap.from('#rn-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_list_common_challenges_applicants_face = document.getElementById('rn-educationalexchange-list-common-challenges-applicants-face');
  if (rn_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#rn-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('rn-educationalexchange-list-how-we-solve-these-challenges');
  if (rn_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#rn-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_section_residency_overview = document.getElementById('rn-educationalexchange-section-residency-overview');
  if (rn_educationalexchange_section_residency_overview) {
    gsap.fromTo('#rn-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_form_who_is_this_residency_for = document.getElementById('rn-educationalexchange-form-who-is-this-residency-for');
  if (rn_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#rn-educationalexchange-form-who-is-this-residency-for input, #rn-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_list_required_documents = document.getElementById('rn-educationalexchange-list-required-documents');
  if (rn_educationalexchange_list_required_documents) {
    gsap.from('#rn-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_list_application_process = document.getElementById('rn-educationalexchange-list-application-process');
  if (rn_educationalexchange_list_application_process) {
    gsap.from('#rn-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_section_timelines_deadlines = document.getElementById('rn-educationalexchange-section-timelines-deadlines');
  if (rn_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#rn-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_section_fees_costs = document.getElementById('rn-educationalexchange-section-fees-costs');
  if (rn_educationalexchange_section_fees_costs) {
    gsap.fromTo('#rn-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_list_risks_common_mistakes = document.getElementById('rn-educationalexchange-list-risks-common-mistakes');
  if (rn_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#rn-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('rn-educationalexchange-section-diy-vs-professional-assistance');
  if (rn_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_section_rio_grande_do_norte_specific_context = document.getElementById('rn-educationalexchange-section-rio-grande-do-norte-specific-context');
  if (rn_educationalexchange_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-educationalexchange-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_section_what_our_clients_say = document.getElementById('rn-educationalexchange-section-what-our-clients-say');
  if (rn_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#rn-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_section_frequently_asked_questions = document.getElementById('rn-educationalexchange-section-frequently-asked-questions');
  if (rn_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#rn-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_section_international_support = document.getElementById('rn-educationalexchange-section-international-support');
  if (rn_educationalexchange_section_international_support) {
    gsap.fromTo('#rn-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_list_our_credentials = document.getElementById('rn-educationalexchange-list-our-credentials');
  if (rn_educationalexchange_list_our_credentials) {
    gsap.from('#rn-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_list_related_services = document.getElementById('rn-educationalexchange-list-related-services');
  if (rn_educationalexchange_list_related_services) {
    gsap.from('#rn-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_section_youre_in_good_hands = document.getElementById('rn-educationalexchange-section-youre-in-good-hands');
  if (rn_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#rn-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_educationalexchange_section_21 = document.getElementById('rn-educationalexchange-section-21');
  if (rn_educationalexchange_section_21) {
    gsap.fromTo('#rn-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('rn-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (rn_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#rn-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #rn-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_list_quick_facts = document.getElementById('rn-humanitarian-list-quick-facts');
  if (rn_humanitarian_list_quick_facts) {
    gsap.from('#rn-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_list_common_challenges_applicants_face = document.getElementById('rn-humanitarian-list-common-challenges-applicants-face');
  if (rn_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#rn-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_list_how_we_solve_these_challenges = document.getElementById('rn-humanitarian-list-how-we-solve-these-challenges');
  if (rn_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#rn-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_section_residency_overview = document.getElementById('rn-humanitarian-section-residency-overview');
  if (rn_humanitarian_section_residency_overview) {
    gsap.fromTo('#rn-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_form_who_is_this_residency_for = document.getElementById('rn-humanitarian-form-who-is-this-residency-for');
  if (rn_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#rn-humanitarian-form-who-is-this-residency-for input, #rn-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_list_required_documents = document.getElementById('rn-humanitarian-list-required-documents');
  if (rn_humanitarian_list_required_documents) {
    gsap.from('#rn-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_list_application_process = document.getElementById('rn-humanitarian-list-application-process');
  if (rn_humanitarian_list_application_process) {
    gsap.from('#rn-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_section_timelines_deadlines = document.getElementById('rn-humanitarian-section-timelines-deadlines');
  if (rn_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#rn-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_section_fees_costs = document.getElementById('rn-humanitarian-section-fees-costs');
  if (rn_humanitarian_section_fees_costs) {
    gsap.fromTo('#rn-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_list_risks_common_mistakes = document.getElementById('rn-humanitarian-list-risks-common-mistakes');
  if (rn_humanitarian_list_risks_common_mistakes) {
    gsap.from('#rn-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_section_diy_vs_professional_assistance = document.getElementById('rn-humanitarian-section-diy-vs-professional-assistance');
  if (rn_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_section_rio_grande_do_norte_specific_context = document.getElementById('rn-humanitarian-section-rio-grande-do-norte-specific-context');
  if (rn_humanitarian_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-humanitarian-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_section_what_our_clients_say = document.getElementById('rn-humanitarian-section-what-our-clients-say');
  if (rn_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#rn-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_section_frequently_asked_questions = document.getElementById('rn-humanitarian-section-frequently-asked-questions');
  if (rn_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#rn-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_section_international_support = document.getElementById('rn-humanitarian-section-international-support');
  if (rn_humanitarian_section_international_support) {
    gsap.fromTo('#rn-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_list_our_credentials = document.getElementById('rn-humanitarian-list-our-credentials');
  if (rn_humanitarian_list_our_credentials) {
    gsap.from('#rn-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_list_related_services = document.getElementById('rn-humanitarian-list-related-services');
  if (rn_humanitarian_list_related_services) {
    gsap.from('#rn-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_section_youre_in_good_hands = document.getElementById('rn-humanitarian-section-youre-in-good-hands');
  if (rn_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#rn-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_humanitarian_section_21 = document.getElementById('rn-humanitarian-section-21');
  if (rn_humanitarian_section_21) {
    gsap.fromTo('#rn-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('rn-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (rn_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#rn-digitalnomad-form-digital-nomad-residency-in-brazil input, #rn-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_list_quick_facts = document.getElementById('rn-digitalnomad-list-quick-facts');
  if (rn_digitalnomad_list_quick_facts) {
    gsap.from('#rn-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_list_common_challenges_applicants_face = document.getElementById('rn-digitalnomad-list-common-challenges-applicants-face');
  if (rn_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#rn-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('rn-digitalnomad-list-how-we-solve-these-challenges');
  if (rn_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#rn-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_section_residency_overview = document.getElementById('rn-digitalnomad-section-residency-overview');
  if (rn_digitalnomad_section_residency_overview) {
    gsap.fromTo('#rn-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_form_who_is_this_residency_for = document.getElementById('rn-digitalnomad-form-who-is-this-residency-for');
  if (rn_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#rn-digitalnomad-form-who-is-this-residency-for input, #rn-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_list_required_documents = document.getElementById('rn-digitalnomad-list-required-documents');
  if (rn_digitalnomad_list_required_documents) {
    gsap.from('#rn-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_list_application_process = document.getElementById('rn-digitalnomad-list-application-process');
  if (rn_digitalnomad_list_application_process) {
    gsap.from('#rn-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_section_timelines_deadlines = document.getElementById('rn-digitalnomad-section-timelines-deadlines');
  if (rn_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#rn-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_section_fees_costs = document.getElementById('rn-digitalnomad-section-fees-costs');
  if (rn_digitalnomad_section_fees_costs) {
    gsap.fromTo('#rn-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_list_risks_common_mistakes = document.getElementById('rn-digitalnomad-list-risks-common-mistakes');
  if (rn_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#rn-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('rn-digitalnomad-section-diy-vs-professional-assistance');
  if (rn_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_section_rio_grande_do_norte_specific_context = document.getElementById('rn-digitalnomad-section-rio-grande-do-norte-specific-context');
  if (rn_digitalnomad_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-digitalnomad-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_section_what_our_clients_say = document.getElementById('rn-digitalnomad-section-what-our-clients-say');
  if (rn_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#rn-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_section_frequently_asked_questions = document.getElementById('rn-digitalnomad-section-frequently-asked-questions');
  if (rn_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#rn-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_section_international_support = document.getElementById('rn-digitalnomad-section-international-support');
  if (rn_digitalnomad_section_international_support) {
    gsap.fromTo('#rn-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_list_our_credentials = document.getElementById('rn-digitalnomad-list-our-credentials');
  if (rn_digitalnomad_list_our_credentials) {
    gsap.from('#rn-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_list_related_services = document.getElementById('rn-digitalnomad-list-related-services');
  if (rn_digitalnomad_list_related_services) {
    gsap.from('#rn-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_section_youre_in_good_hands = document.getElementById('rn-digitalnomad-section-youre-in-good-hands');
  if (rn_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#rn-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_digitalnomad_section_21 = document.getElementById('rn-digitalnomad-section-21');
  if (rn_digitalnomad_section_21) {
    gsap.fromTo('#rn-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('rn-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (rn_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#rn-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #rn-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_list_quick_facts = document.getElementById('rn-familyreunion-list-quick-facts');
  if (rn_familyreunion_list_quick_facts) {
    gsap.from('#rn-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_list_common_challenges_applicants_face = document.getElementById('rn-familyreunion-list-common-challenges-applicants-face');
  if (rn_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#rn-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_list_how_we_solve_these_challenges = document.getElementById('rn-familyreunion-list-how-we-solve-these-challenges');
  if (rn_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#rn-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_section_residency_overview = document.getElementById('rn-familyreunion-section-residency-overview');
  if (rn_familyreunion_section_residency_overview) {
    gsap.fromTo('#rn-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_form_who_is_this_residency_for = document.getElementById('rn-familyreunion-form-who-is-this-residency-for');
  if (rn_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#rn-familyreunion-form-who-is-this-residency-for input, #rn-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_list_required_documents = document.getElementById('rn-familyreunion-list-required-documents');
  if (rn_familyreunion_list_required_documents) {
    gsap.from('#rn-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_list_application_process = document.getElementById('rn-familyreunion-list-application-process');
  if (rn_familyreunion_list_application_process) {
    gsap.from('#rn-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_section_timelines_deadlines = document.getElementById('rn-familyreunion-section-timelines-deadlines');
  if (rn_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#rn-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_section_fees_costs = document.getElementById('rn-familyreunion-section-fees-costs');
  if (rn_familyreunion_section_fees_costs) {
    gsap.fromTo('#rn-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_list_risks_common_mistakes = document.getElementById('rn-familyreunion-list-risks-common-mistakes');
  if (rn_familyreunion_list_risks_common_mistakes) {
    gsap.from('#rn-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_section_diy_vs_professional_assistance = document.getElementById('rn-familyreunion-section-diy-vs-professional-assistance');
  if (rn_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_section_rio_grande_do_norte_specific_context = document.getElementById('rn-familyreunion-section-rio-grande-do-norte-specific-context');
  if (rn_familyreunion_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-familyreunion-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_section_what_our_clients_say = document.getElementById('rn-familyreunion-section-what-our-clients-say');
  if (rn_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#rn-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_section_frequently_asked_questions = document.getElementById('rn-familyreunion-section-frequently-asked-questions');
  if (rn_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#rn-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_section_international_support = document.getElementById('rn-familyreunion-section-international-support');
  if (rn_familyreunion_section_international_support) {
    gsap.fromTo('#rn-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_list_our_credentials = document.getElementById('rn-familyreunion-list-our-credentials');
  if (rn_familyreunion_list_our_credentials) {
    gsap.from('#rn-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_list_related_services = document.getElementById('rn-familyreunion-list-related-services');
  if (rn_familyreunion_list_related_services) {
    gsap.from('#rn-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_section_youre_in_good_hands = document.getElementById('rn-familyreunion-section-youre-in-good-hands');
  if (rn_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#rn-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_familyreunion_section_21 = document.getElementById('rn-familyreunion-section-21');
  if (rn_familyreunion_section_21) {
    gsap.fromTo('#rn-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('rn-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (rn_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#rn-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #rn-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_list_quick_facts = document.getElementById('rn-mercosul-list-quick-facts');
  if (rn_mercosul_list_quick_facts) {
    gsap.from('#rn-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_list_common_challenges_applicants_face = document.getElementById('rn-mercosul-list-common-challenges-applicants-face');
  if (rn_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#rn-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_list_how_we_solve_these_challenges = document.getElementById('rn-mercosul-list-how-we-solve-these-challenges');
  if (rn_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#rn-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_section_residency_overview = document.getElementById('rn-mercosul-section-residency-overview');
  if (rn_mercosul_section_residency_overview) {
    gsap.fromTo('#rn-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_form_who_is_this_residency_for = document.getElementById('rn-mercosul-form-who-is-this-residency-for');
  if (rn_mercosul_form_who_is_this_residency_for) {
    gsap.from('#rn-mercosul-form-who-is-this-residency-for input, #rn-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_list_required_documents = document.getElementById('rn-mercosul-list-required-documents');
  if (rn_mercosul_list_required_documents) {
    gsap.from('#rn-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_list_application_process = document.getElementById('rn-mercosul-list-application-process');
  if (rn_mercosul_list_application_process) {
    gsap.from('#rn-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_section_timelines_deadlines = document.getElementById('rn-mercosul-section-timelines-deadlines');
  if (rn_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#rn-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_section_fees_costs = document.getElementById('rn-mercosul-section-fees-costs');
  if (rn_mercosul_section_fees_costs) {
    gsap.fromTo('#rn-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_list_risks_common_mistakes = document.getElementById('rn-mercosul-list-risks-common-mistakes');
  if (rn_mercosul_list_risks_common_mistakes) {
    gsap.from('#rn-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_section_diy_vs_professional_assistance = document.getElementById('rn-mercosul-section-diy-vs-professional-assistance');
  if (rn_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_section_rio_grande_do_norte_specific_context = document.getElementById('rn-mercosul-section-rio-grande-do-norte-specific-context');
  if (rn_mercosul_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-mercosul-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_section_what_our_clients_say = document.getElementById('rn-mercosul-section-what-our-clients-say');
  if (rn_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#rn-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_section_frequently_asked_questions = document.getElementById('rn-mercosul-section-frequently-asked-questions');
  if (rn_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#rn-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_section_international_support = document.getElementById('rn-mercosul-section-international-support');
  if (rn_mercosul_section_international_support) {
    gsap.fromTo('#rn-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_list_our_credentials = document.getElementById('rn-mercosul-list-our-credentials');
  if (rn_mercosul_list_our_credentials) {
    gsap.from('#rn-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_list_related_services = document.getElementById('rn-mercosul-list-related-services');
  if (rn_mercosul_list_related_services) {
    gsap.from('#rn-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_section_youre_in_good_hands = document.getElementById('rn-mercosul-section-youre-in-good-hands');
  if (rn_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#rn-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_mercosul_section_21 = document.getElementById('rn-mercosul-section-21');
  if (rn_mercosul_section_21) {
    gsap.fromTo('#rn-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('rn-retiree-form-retire-in-brazil-with-retiree-residency');
  if (rn_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#rn-retiree-form-retire-in-brazil-with-retiree-residency input, #rn-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_list_quick_facts = document.getElementById('rn-retiree-list-quick-facts');
  if (rn_retiree_list_quick_facts) {
    gsap.from('#rn-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_list_common_challenges_applicants_face = document.getElementById('rn-retiree-list-common-challenges-applicants-face');
  if (rn_retiree_list_common_challenges_applicants_face) {
    gsap.from('#rn-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_list_how_we_solve_these_challenges = document.getElementById('rn-retiree-list-how-we-solve-these-challenges');
  if (rn_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#rn-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_section_residency_overview = document.getElementById('rn-retiree-section-residency-overview');
  if (rn_retiree_section_residency_overview) {
    gsap.fromTo('#rn-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_form_who_is_this_residency_for = document.getElementById('rn-retiree-form-who-is-this-residency-for');
  if (rn_retiree_form_who_is_this_residency_for) {
    gsap.from('#rn-retiree-form-who-is-this-residency-for input, #rn-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_list_required_documents = document.getElementById('rn-retiree-list-required-documents');
  if (rn_retiree_list_required_documents) {
    gsap.from('#rn-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_list_application_process = document.getElementById('rn-retiree-list-application-process');
  if (rn_retiree_list_application_process) {
    gsap.from('#rn-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_section_timelines_deadlines = document.getElementById('rn-retiree-section-timelines-deadlines');
  if (rn_retiree_section_timelines_deadlines) {
    gsap.fromTo('#rn-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_section_fees_costs = document.getElementById('rn-retiree-section-fees-costs');
  if (rn_retiree_section_fees_costs) {
    gsap.fromTo('#rn-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_list_risks_common_mistakes = document.getElementById('rn-retiree-list-risks-common-mistakes');
  if (rn_retiree_list_risks_common_mistakes) {
    gsap.from('#rn-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_section_diy_vs_professional_assistance = document.getElementById('rn-retiree-section-diy-vs-professional-assistance');
  if (rn_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_section_rio_grande_do_norte_specific_context = document.getElementById('rn-retiree-section-rio-grande-do-norte-specific-context');
  if (rn_retiree_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-retiree-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_section_what_our_clients_say = document.getElementById('rn-retiree-section-what-our-clients-say');
  if (rn_retiree_section_what_our_clients_say) {
    gsap.fromTo('#rn-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_section_frequently_asked_questions = document.getElementById('rn-retiree-section-frequently-asked-questions');
  if (rn_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#rn-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_section_international_support = document.getElementById('rn-retiree-section-international-support');
  if (rn_retiree_section_international_support) {
    gsap.fromTo('#rn-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_list_our_credentials = document.getElementById('rn-retiree-list-our-credentials');
  if (rn_retiree_list_our_credentials) {
    gsap.from('#rn-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_list_related_services = document.getElementById('rn-retiree-list-related-services');
  if (rn_retiree_list_related_services) {
    gsap.from('#rn-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_section_youre_in_good_hands = document.getElementById('rn-retiree-section-youre-in-good-hands');
  if (rn_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#rn-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_retiree_section_21 = document.getElementById('rn-retiree-section-21');
  if (rn_retiree_section_21) {
    gsap.fromTo('#rn-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('rn-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (rn_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#rn-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #rn-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_list_quick_facts = document.getElementById('rn-volunteer-list-quick-facts');
  if (rn_volunteer_list_quick_facts) {
    gsap.from('#rn-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_list_common_challenges_applicants_face = document.getElementById('rn-volunteer-list-common-challenges-applicants-face');
  if (rn_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#rn-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_list_how_we_solve_these_challenges = document.getElementById('rn-volunteer-list-how-we-solve-these-challenges');
  if (rn_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#rn-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_section_residency_overview = document.getElementById('rn-volunteer-section-residency-overview');
  if (rn_volunteer_section_residency_overview) {
    gsap.fromTo('#rn-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_form_who_is_this_residency_for = document.getElementById('rn-volunteer-form-who-is-this-residency-for');
  if (rn_volunteer_form_who_is_this_residency_for) {
    gsap.from('#rn-volunteer-form-who-is-this-residency-for input, #rn-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_list_required_documents = document.getElementById('rn-volunteer-list-required-documents');
  if (rn_volunteer_list_required_documents) {
    gsap.from('#rn-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_list_application_process = document.getElementById('rn-volunteer-list-application-process');
  if (rn_volunteer_list_application_process) {
    gsap.from('#rn-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_section_timelines_deadlines = document.getElementById('rn-volunteer-section-timelines-deadlines');
  if (rn_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#rn-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_section_fees_costs = document.getElementById('rn-volunteer-section-fees-costs');
  if (rn_volunteer_section_fees_costs) {
    gsap.fromTo('#rn-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_list_risks_common_mistakes = document.getElementById('rn-volunteer-list-risks-common-mistakes');
  if (rn_volunteer_list_risks_common_mistakes) {
    gsap.from('#rn-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_section_diy_vs_professional_assistance = document.getElementById('rn-volunteer-section-diy-vs-professional-assistance');
  if (rn_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_section_rio_grande_do_norte_specific_context = document.getElementById('rn-volunteer-section-rio-grande-do-norte-specific-context');
  if (rn_volunteer_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-volunteer-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_section_what_our_clients_say = document.getElementById('rn-volunteer-section-what-our-clients-say');
  if (rn_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#rn-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_section_frequently_asked_questions = document.getElementById('rn-volunteer-section-frequently-asked-questions');
  if (rn_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#rn-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_section_international_support = document.getElementById('rn-volunteer-section-international-support');
  if (rn_volunteer_section_international_support) {
    gsap.fromTo('#rn-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_list_our_credentials = document.getElementById('rn-volunteer-list-our-credentials');
  if (rn_volunteer_list_our_credentials) {
    gsap.from('#rn-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_list_related_services = document.getElementById('rn-volunteer-list-related-services');
  if (rn_volunteer_list_related_services) {
    gsap.from('#rn-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_section_youre_in_good_hands = document.getElementById('rn-volunteer-section-youre-in-good-hands');
  if (rn_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#rn-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_volunteer_section_21 = document.getElementById('rn-volunteer-section-21');
  if (rn_volunteer_section_21) {
    gsap.fromTo('#rn-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('rn-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (rn_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#rn-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #rn-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_list_quick_facts = document.getElementById('rn-skilledworker-list-quick-facts');
  if (rn_skilledworker_list_quick_facts) {
    gsap.from('#rn-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_list_common_challenges_applicants_face = document.getElementById('rn-skilledworker-list-common-challenges-applicants-face');
  if (rn_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#rn-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_list_how_we_solve_these_challenges = document.getElementById('rn-skilledworker-list-how-we-solve-these-challenges');
  if (rn_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#rn-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_section_residency_overview = document.getElementById('rn-skilledworker-section-residency-overview');
  if (rn_skilledworker_section_residency_overview) {
    gsap.fromTo('#rn-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_form_who_is_this_residency_for = document.getElementById('rn-skilledworker-form-who-is-this-residency-for');
  if (rn_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#rn-skilledworker-form-who-is-this-residency-for input, #rn-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_list_required_documents = document.getElementById('rn-skilledworker-list-required-documents');
  if (rn_skilledworker_list_required_documents) {
    gsap.from('#rn-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_list_application_process = document.getElementById('rn-skilledworker-list-application-process');
  if (rn_skilledworker_list_application_process) {
    gsap.from('#rn-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_section_timelines_deadlines = document.getElementById('rn-skilledworker-section-timelines-deadlines');
  if (rn_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#rn-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_section_fees_costs = document.getElementById('rn-skilledworker-section-fees-costs');
  if (rn_skilledworker_section_fees_costs) {
    gsap.fromTo('#rn-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_list_risks_common_mistakes = document.getElementById('rn-skilledworker-list-risks-common-mistakes');
  if (rn_skilledworker_list_risks_common_mistakes) {
    gsap.from('#rn-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_section_diy_vs_professional_assistance = document.getElementById('rn-skilledworker-section-diy-vs-professional-assistance');
  if (rn_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_section_rio_grande_do_norte_specific_context = document.getElementById('rn-skilledworker-section-rio-grande-do-norte-specific-context');
  if (rn_skilledworker_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-skilledworker-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_section_what_our_clients_say = document.getElementById('rn-skilledworker-section-what-our-clients-say');
  if (rn_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#rn-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_section_frequently_asked_questions = document.getElementById('rn-skilledworker-section-frequently-asked-questions');
  if (rn_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#rn-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_section_international_support = document.getElementById('rn-skilledworker-section-international-support');
  if (rn_skilledworker_section_international_support) {
    gsap.fromTo('#rn-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_list_our_credentials = document.getElementById('rn-skilledworker-list-our-credentials');
  if (rn_skilledworker_list_our_credentials) {
    gsap.from('#rn-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_list_related_services = document.getElementById('rn-skilledworker-list-related-services');
  if (rn_skilledworker_list_related_services) {
    gsap.from('#rn-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_section_youre_in_good_hands = document.getElementById('rn-skilledworker-section-youre-in-good-hands');
  if (rn_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#rn-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_skilledworker_section_21 = document.getElementById('rn-skilledworker-section-21');
  if (rn_skilledworker_section_21) {
    gsap.fromTo('#rn-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('rn-religious-form-religious-residency-in-brazil-for-missions');
  if (rn_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#rn-religious-form-religious-residency-in-brazil-for-missions input, #rn-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_list_quick_facts = document.getElementById('rn-religious-list-quick-facts');
  if (rn_religious_list_quick_facts) {
    gsap.from('#rn-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_list_common_challenges_applicants_face = document.getElementById('rn-religious-list-common-challenges-applicants-face');
  if (rn_religious_list_common_challenges_applicants_face) {
    gsap.from('#rn-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_list_how_we_solve_these_challenges = document.getElementById('rn-religious-list-how-we-solve-these-challenges');
  if (rn_religious_list_how_we_solve_these_challenges) {
    gsap.from('#rn-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_section_residency_overview = document.getElementById('rn-religious-section-residency-overview');
  if (rn_religious_section_residency_overview) {
    gsap.fromTo('#rn-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_form_who_is_this_residency_for = document.getElementById('rn-religious-form-who-is-this-residency-for');
  if (rn_religious_form_who_is_this_residency_for) {
    gsap.from('#rn-religious-form-who-is-this-residency-for input, #rn-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_list_required_documents = document.getElementById('rn-religious-list-required-documents');
  if (rn_religious_list_required_documents) {
    gsap.from('#rn-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_list_application_process = document.getElementById('rn-religious-list-application-process');
  if (rn_religious_list_application_process) {
    gsap.from('#rn-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_section_timelines_deadlines = document.getElementById('rn-religious-section-timelines-deadlines');
  if (rn_religious_section_timelines_deadlines) {
    gsap.fromTo('#rn-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_section_fees_costs = document.getElementById('rn-religious-section-fees-costs');
  if (rn_religious_section_fees_costs) {
    gsap.fromTo('#rn-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_list_risks_common_mistakes = document.getElementById('rn-religious-list-risks-common-mistakes');
  if (rn_religious_list_risks_common_mistakes) {
    gsap.from('#rn-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_section_diy_vs_professional_assistance = document.getElementById('rn-religious-section-diy-vs-professional-assistance');
  if (rn_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_section_rio_grande_do_norte_specific_context = document.getElementById('rn-religious-section-rio-grande-do-norte-specific-context');
  if (rn_religious_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-religious-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_section_what_our_clients_say = document.getElementById('rn-religious-section-what-our-clients-say');
  if (rn_religious_section_what_our_clients_say) {
    gsap.fromTo('#rn-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_section_frequently_asked_questions = document.getElementById('rn-religious-section-frequently-asked-questions');
  if (rn_religious_section_frequently_asked_questions) {
    gsap.fromTo('#rn-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_section_international_support = document.getElementById('rn-religious-section-international-support');
  if (rn_religious_section_international_support) {
    gsap.fromTo('#rn-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_list_our_credentials = document.getElementById('rn-religious-list-our-credentials');
  if (rn_religious_list_our_credentials) {
    gsap.from('#rn-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_list_related_services = document.getElementById('rn-religious-list-related-services');
  if (rn_religious_list_related_services) {
    gsap.from('#rn-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_section_youre_in_good_hands = document.getElementById('rn-religious-section-youre-in-good-hands');
  if (rn_religious_section_youre_in_good_hands) {
    gsap.fromTo('#rn-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_religious_section_21 = document.getElementById('rn-religious-section-21');
  if (rn_religious_section_21) {
    gsap.fromTo('#rn-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('rn-investor-form-gain-residency-in-brazil-through-investment');
  if (rn_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#rn-investor-form-gain-residency-in-brazil-through-investment input, #rn-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_list_quick_facts = document.getElementById('rn-investor-list-quick-facts');
  if (rn_investor_list_quick_facts) {
    gsap.from('#rn-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_list_common_challenges_applicants_face = document.getElementById('rn-investor-list-common-challenges-applicants-face');
  if (rn_investor_list_common_challenges_applicants_face) {
    gsap.from('#rn-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_list_how_we_solve_these_challenges = document.getElementById('rn-investor-list-how-we-solve-these-challenges');
  if (rn_investor_list_how_we_solve_these_challenges) {
    gsap.from('#rn-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_section_residency_overview = document.getElementById('rn-investor-section-residency-overview');
  if (rn_investor_section_residency_overview) {
    gsap.fromTo('#rn-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_form_who_is_this_residency_for = document.getElementById('rn-investor-form-who-is-this-residency-for');
  if (rn_investor_form_who_is_this_residency_for) {
    gsap.from('#rn-investor-form-who-is-this-residency-for input, #rn-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_list_required_documents = document.getElementById('rn-investor-list-required-documents');
  if (rn_investor_list_required_documents) {
    gsap.from('#rn-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_list_application_process = document.getElementById('rn-investor-list-application-process');
  if (rn_investor_list_application_process) {
    gsap.from('#rn-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_section_timelines_deadlines = document.getElementById('rn-investor-section-timelines-deadlines');
  if (rn_investor_section_timelines_deadlines) {
    gsap.fromTo('#rn-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_section_fees_costs = document.getElementById('rn-investor-section-fees-costs');
  if (rn_investor_section_fees_costs) {
    gsap.fromTo('#rn-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_list_risks_common_mistakes = document.getElementById('rn-investor-list-risks-common-mistakes');
  if (rn_investor_list_risks_common_mistakes) {
    gsap.from('#rn-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_section_diy_vs_professional_assistance = document.getElementById('rn-investor-section-diy-vs-professional-assistance');
  if (rn_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_section_rio_grande_do_norte_specific_context = document.getElementById('rn-investor-section-rio-grande-do-norte-specific-context');
  if (rn_investor_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-investor-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_section_what_our_clients_say = document.getElementById('rn-investor-section-what-our-clients-say');
  if (rn_investor_section_what_our_clients_say) {
    gsap.fromTo('#rn-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_section_frequently_asked_questions = document.getElementById('rn-investor-section-frequently-asked-questions');
  if (rn_investor_section_frequently_asked_questions) {
    gsap.fromTo('#rn-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_section_international_support = document.getElementById('rn-investor-section-international-support');
  if (rn_investor_section_international_support) {
    gsap.fromTo('#rn-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_list_our_credentials = document.getElementById('rn-investor-list-our-credentials');
  if (rn_investor_list_our_credentials) {
    gsap.from('#rn-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_list_related_services = document.getElementById('rn-investor-list-related-services');
  if (rn_investor_list_related_services) {
    gsap.from('#rn-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_section_youre_in_good_hands = document.getElementById('rn-investor-section-youre-in-good-hands');
  if (rn_investor_section_youre_in_good_hands) {
    gsap.fromTo('#rn-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_investor_section_21 = document.getElementById('rn-investor-section-21');
  if (rn_investor_section_21) {
    gsap.fromTo('#rn-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('rn-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (rn_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#rn-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #rn-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_list_quick_facts = document.getElementById('rn-healthtreatment-list-quick-facts');
  if (rn_healthtreatment_list_quick_facts) {
    gsap.from('#rn-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_list_common_challenges_applicants_face = document.getElementById('rn-healthtreatment-list-common-challenges-applicants-face');
  if (rn_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#rn-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('rn-healthtreatment-list-how-we-solve-these-challenges');
  if (rn_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#rn-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_section_residency_overview = document.getElementById('rn-healthtreatment-section-residency-overview');
  if (rn_healthtreatment_section_residency_overview) {
    gsap.fromTo('#rn-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_form_who_is_this_residency_for = document.getElementById('rn-healthtreatment-form-who-is-this-residency-for');
  if (rn_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#rn-healthtreatment-form-who-is-this-residency-for input, #rn-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_list_required_documents = document.getElementById('rn-healthtreatment-list-required-documents');
  if (rn_healthtreatment_list_required_documents) {
    gsap.from('#rn-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_list_application_process = document.getElementById('rn-healthtreatment-list-application-process');
  if (rn_healthtreatment_list_application_process) {
    gsap.from('#rn-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_section_timelines_deadlines = document.getElementById('rn-healthtreatment-section-timelines-deadlines');
  if (rn_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#rn-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_section_fees_costs = document.getElementById('rn-healthtreatment-section-fees-costs');
  if (rn_healthtreatment_section_fees_costs) {
    gsap.fromTo('#rn-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_list_risks_common_mistakes = document.getElementById('rn-healthtreatment-list-risks-common-mistakes');
  if (rn_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#rn-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('rn-healthtreatment-section-diy-vs-professional-assistance');
  if (rn_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_section_rio_grande_do_norte_specific_context = document.getElementById('rn-healthtreatment-section-rio-grande-do-norte-specific-context');
  if (rn_healthtreatment_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-healthtreatment-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_section_what_our_clients_say = document.getElementById('rn-healthtreatment-section-what-our-clients-say');
  if (rn_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#rn-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_section_frequently_asked_questions = document.getElementById('rn-healthtreatment-section-frequently-asked-questions');
  if (rn_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#rn-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_section_international_support = document.getElementById('rn-healthtreatment-section-international-support');
  if (rn_healthtreatment_section_international_support) {
    gsap.fromTo('#rn-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_list_our_credentials = document.getElementById('rn-healthtreatment-list-our-credentials');
  if (rn_healthtreatment_list_our_credentials) {
    gsap.from('#rn-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_list_related_services = document.getElementById('rn-healthtreatment-list-related-services');
  if (rn_healthtreatment_list_related_services) {
    gsap.from('#rn-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_section_youre_in_good_hands = document.getElementById('rn-healthtreatment-section-youre-in-good-hands');
  if (rn_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#rn-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_healthtreatment_section_21 = document.getElementById('rn-healthtreatment-section-21');
  if (rn_healthtreatment_section_21) {
    gsap.fromTo('#rn-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('rn-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (rn_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#rn-cplp-form-residency-for-cplp-citizens-in-brazil input, #rn-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_list_quick_facts = document.getElementById('rn-cplp-list-quick-facts');
  if (rn_cplp_list_quick_facts) {
    gsap.from('#rn-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_list_common_challenges_applicants_face = document.getElementById('rn-cplp-list-common-challenges-applicants-face');
  if (rn_cplp_list_common_challenges_applicants_face) {
    gsap.from('#rn-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_list_how_we_solve_these_challenges = document.getElementById('rn-cplp-list-how-we-solve-these-challenges');
  if (rn_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#rn-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_section_residency_overview = document.getElementById('rn-cplp-section-residency-overview');
  if (rn_cplp_section_residency_overview) {
    gsap.fromTo('#rn-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_form_who_is_this_residency_for = document.getElementById('rn-cplp-form-who-is-this-residency-for');
  if (rn_cplp_form_who_is_this_residency_for) {
    gsap.from('#rn-cplp-form-who-is-this-residency-for input, #rn-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_list_required_documents = document.getElementById('rn-cplp-list-required-documents');
  if (rn_cplp_list_required_documents) {
    gsap.from('#rn-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_list_application_process = document.getElementById('rn-cplp-list-application-process');
  if (rn_cplp_list_application_process) {
    gsap.from('#rn-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_section_timelines_deadlines = document.getElementById('rn-cplp-section-timelines-deadlines');
  if (rn_cplp_section_timelines_deadlines) {
    gsap.fromTo('#rn-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_section_fees_costs = document.getElementById('rn-cplp-section-fees-costs');
  if (rn_cplp_section_fees_costs) {
    gsap.fromTo('#rn-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_list_risks_common_mistakes = document.getElementById('rn-cplp-list-risks-common-mistakes');
  if (rn_cplp_list_risks_common_mistakes) {
    gsap.from('#rn-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_section_diy_vs_professional_assistance = document.getElementById('rn-cplp-section-diy-vs-professional-assistance');
  if (rn_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_section_rio_grande_do_norte_specific_context = document.getElementById('rn-cplp-section-rio-grande-do-norte-specific-context');
  if (rn_cplp_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-cplp-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_section_what_our_clients_say = document.getElementById('rn-cplp-section-what-our-clients-say');
  if (rn_cplp_section_what_our_clients_say) {
    gsap.fromTo('#rn-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_section_frequently_asked_questions = document.getElementById('rn-cplp-section-frequently-asked-questions');
  if (rn_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#rn-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_section_international_support = document.getElementById('rn-cplp-section-international-support');
  if (rn_cplp_section_international_support) {
    gsap.fromTo('#rn-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_list_our_credentials = document.getElementById('rn-cplp-list-our-credentials');
  if (rn_cplp_list_our_credentials) {
    gsap.from('#rn-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_list_related_services = document.getElementById('rn-cplp-list-related-services');
  if (rn_cplp_list_related_services) {
    gsap.from('#rn-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_section_youre_in_good_hands = document.getElementById('rn-cplp-section-youre-in-good-hands');
  if (rn_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#rn-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_cplp_section_21 = document.getElementById('rn-cplp-section-21');
  if (rn_cplp_section_21) {
    gsap.fromTo('#rn-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('rn-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (rn_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#rn-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #rn-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_list_quick_facts = document.getElementById('rn-youthexchange-list-quick-facts');
  if (rn_youthexchange_list_quick_facts) {
    gsap.from('#rn-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_list_common_challenges_applicants_face = document.getElementById('rn-youthexchange-list-common-challenges-applicants-face');
  if (rn_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#rn-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_list_how_we_solve_these_challenges = document.getElementById('rn-youthexchange-list-how-we-solve-these-challenges');
  if (rn_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#rn-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_section_residency_overview = document.getElementById('rn-youthexchange-section-residency-overview');
  if (rn_youthexchange_section_residency_overview) {
    gsap.fromTo('#rn-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_form_who_is_this_residency_for = document.getElementById('rn-youthexchange-form-who-is-this-residency-for');
  if (rn_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#rn-youthexchange-form-who-is-this-residency-for input, #rn-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_list_required_documents = document.getElementById('rn-youthexchange-list-required-documents');
  if (rn_youthexchange_list_required_documents) {
    gsap.from('#rn-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_list_application_process = document.getElementById('rn-youthexchange-list-application-process');
  if (rn_youthexchange_list_application_process) {
    gsap.from('#rn-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_section_timelines_deadlines = document.getElementById('rn-youthexchange-section-timelines-deadlines');
  if (rn_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#rn-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_section_fees_costs = document.getElementById('rn-youthexchange-section-fees-costs');
  if (rn_youthexchange_section_fees_costs) {
    gsap.fromTo('#rn-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_list_risks_common_mistakes = document.getElementById('rn-youthexchange-list-risks-common-mistakes');
  if (rn_youthexchange_list_risks_common_mistakes) {
    gsap.from('#rn-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_section_diy_vs_professional_assistance = document.getElementById('rn-youthexchange-section-diy-vs-professional-assistance');
  if (rn_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_section_rio_grande_do_norte_specific_context = document.getElementById('rn-youthexchange-section-rio-grande-do-norte-specific-context');
  if (rn_youthexchange_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-youthexchange-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_section_what_our_clients_say = document.getElementById('rn-youthexchange-section-what-our-clients-say');
  if (rn_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#rn-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_section_frequently_asked_questions = document.getElementById('rn-youthexchange-section-frequently-asked-questions');
  if (rn_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#rn-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_section_international_support = document.getElementById('rn-youthexchange-section-international-support');
  if (rn_youthexchange_section_international_support) {
    gsap.fromTo('#rn-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_list_our_credentials = document.getElementById('rn-youthexchange-list-our-credentials');
  if (rn_youthexchange_list_our_credentials) {
    gsap.from('#rn-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_list_related_services = document.getElementById('rn-youthexchange-list-related-services');
  if (rn_youthexchange_list_related_services) {
    gsap.from('#rn-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_section_youre_in_good_hands = document.getElementById('rn-youthexchange-section-youre-in-good-hands');
  if (rn_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#rn-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_youthexchange_section_21 = document.getElementById('rn-youthexchange-section-21');
  if (rn_youthexchange_section_21) {
    gsap.fromTo('#rn-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('rn-work-form-work-and-reside-in-brazil-with-work-residency');
  if (rn_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#rn-work-form-work-and-reside-in-brazil-with-work-residency input, #rn-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_list_quick_facts = document.getElementById('rn-work-list-quick-facts');
  if (rn_work_list_quick_facts) {
    gsap.from('#rn-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_list_common_challenges_applicants_face = document.getElementById('rn-work-list-common-challenges-applicants-face');
  if (rn_work_list_common_challenges_applicants_face) {
    gsap.from('#rn-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_list_how_we_solve_these_challenges = document.getElementById('rn-work-list-how-we-solve-these-challenges');
  if (rn_work_list_how_we_solve_these_challenges) {
    gsap.from('#rn-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_section_residency_overview = document.getElementById('rn-work-section-residency-overview');
  if (rn_work_section_residency_overview) {
    gsap.fromTo('#rn-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_form_who_is_this_residency_for = document.getElementById('rn-work-form-who-is-this-residency-for');
  if (rn_work_form_who_is_this_residency_for) {
    gsap.from('#rn-work-form-who-is-this-residency-for input, #rn-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_list_required_documents = document.getElementById('rn-work-list-required-documents');
  if (rn_work_list_required_documents) {
    gsap.from('#rn-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_list_application_process = document.getElementById('rn-work-list-application-process');
  if (rn_work_list_application_process) {
    gsap.from('#rn-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_section_timelines_deadlines = document.getElementById('rn-work-section-timelines-deadlines');
  if (rn_work_section_timelines_deadlines) {
    gsap.fromTo('#rn-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_section_fees_costs = document.getElementById('rn-work-section-fees-costs');
  if (rn_work_section_fees_costs) {
    gsap.fromTo('#rn-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_list_risks_common_mistakes = document.getElementById('rn-work-list-risks-common-mistakes');
  if (rn_work_list_risks_common_mistakes) {
    gsap.from('#rn-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_section_diy_vs_professional_assistance = document.getElementById('rn-work-section-diy-vs-professional-assistance');
  if (rn_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_section_rio_grande_do_norte_specific_context = document.getElementById('rn-work-section-rio-grande-do-norte-specific-context');
  if (rn_work_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-work-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_section_what_our_clients_say = document.getElementById('rn-work-section-what-our-clients-say');
  if (rn_work_section_what_our_clients_say) {
    gsap.fromTo('#rn-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_section_frequently_asked_questions = document.getElementById('rn-work-section-frequently-asked-questions');
  if (rn_work_section_frequently_asked_questions) {
    gsap.fromTo('#rn-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_section_international_support = document.getElementById('rn-work-section-international-support');
  if (rn_work_section_international_support) {
    gsap.fromTo('#rn-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_list_our_credentials = document.getElementById('rn-work-list-our-credentials');
  if (rn_work_list_our_credentials) {
    gsap.from('#rn-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_list_related_services = document.getElementById('rn-work-list-related-services');
  if (rn_work_list_related_services) {
    gsap.from('#rn-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_section_youre_in_good_hands = document.getElementById('rn-work-section-youre-in-good-hands');
  if (rn_work_section_youre_in_good_hands) {
    gsap.fromTo('#rn-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_work_section_21 = document.getElementById('rn-work-section-21');
  if (rn_work_section_21) {
    gsap.fromTo('#rn-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('rn-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (rn_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#rn-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #rn-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_list_quick_facts = document.getElementById('rn-startup-list-quick-facts');
  if (rn_startup_list_quick_facts) {
    gsap.from('#rn-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_list_common_challenges_applicants_face = document.getElementById('rn-startup-list-common-challenges-applicants-face');
  if (rn_startup_list_common_challenges_applicants_face) {
    gsap.from('#rn-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_list_how_we_solve_these_challenges = document.getElementById('rn-startup-list-how-we-solve-these-challenges');
  if (rn_startup_list_how_we_solve_these_challenges) {
    gsap.from('#rn-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_section_visa_overview = document.getElementById('rn-startup-section-visa-overview');
  if (rn_startup_section_visa_overview) {
    gsap.fromTo('#rn-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_form_who_is_this_visa_for = document.getElementById('rn-startup-form-who-is-this-visa-for');
  if (rn_startup_form_who_is_this_visa_for) {
    gsap.from('#rn-startup-form-who-is-this-visa-for input, #rn-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_list_required_documents = document.getElementById('rn-startup-list-required-documents');
  if (rn_startup_list_required_documents) {
    gsap.from('#rn-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_list_application_process = document.getElementById('rn-startup-list-application-process');
  if (rn_startup_list_application_process) {
    gsap.from('#rn-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_section_timelines_deadlines = document.getElementById('rn-startup-section-timelines-deadlines');
  if (rn_startup_section_timelines_deadlines) {
    gsap.fromTo('#rn-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_section_fees_costs = document.getElementById('rn-startup-section-fees-costs');
  if (rn_startup_section_fees_costs) {
    gsap.fromTo('#rn-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_list_risks_common_mistakes = document.getElementById('rn-startup-list-risks-common-mistakes');
  if (rn_startup_list_risks_common_mistakes) {
    gsap.from('#rn-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_section_diy_vs_professional_assistance = document.getElementById('rn-startup-section-diy-vs-professional-assistance');
  if (rn_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_section_rio_grande_do_norte_specific_context = document.getElementById('rn-startup-section-rio-grande-do-norte-specific-context');
  if (rn_startup_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-startup-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_section_what_our_clients_say = document.getElementById('rn-startup-section-what-our-clients-say');
  if (rn_startup_section_what_our_clients_say) {
    gsap.fromTo('#rn-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_section_frequently_asked_questions = document.getElementById('rn-startup-section-frequently-asked-questions');
  if (rn_startup_section_frequently_asked_questions) {
    gsap.fromTo('#rn-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_section_international_support = document.getElementById('rn-startup-section-international-support');
  if (rn_startup_section_international_support) {
    gsap.fromTo('#rn-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_list_our_credentials = document.getElementById('rn-startup-list-our-credentials');
  if (rn_startup_list_our_credentials) {
    gsap.from('#rn-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_list_related_services = document.getElementById('rn-startup-list-related-services');
  if (rn_startup_list_related_services) {
    gsap.from('#rn-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_section_youre_in_good_hands = document.getElementById('rn-startup-section-youre-in-good-hands');
  if (rn_startup_section_youre_in_good_hands) {
    gsap.fromTo('#rn-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_startup_section_21 = document.getElementById('rn-startup-section-21');
  if (rn_startup_section_21) {
    gsap.fromTo('#rn-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('rn-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (rn_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#rn-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #rn-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_list_quick_facts = document.getElementById('rn-family-list-quick-facts');
  if (rn_family_list_quick_facts) {
    gsap.from('#rn-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_list_common_challenges_applicants_face = document.getElementById('rn-family-list-common-challenges-applicants-face');
  if (rn_family_list_common_challenges_applicants_face) {
    gsap.from('#rn-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_list_how_we_solve_these_challenges = document.getElementById('rn-family-list-how-we-solve-these-challenges');
  if (rn_family_list_how_we_solve_these_challenges) {
    gsap.from('#rn-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_section_visa_overview = document.getElementById('rn-family-section-visa-overview');
  if (rn_family_section_visa_overview) {
    gsap.fromTo('#rn-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_form_who_is_this_visa_for = document.getElementById('rn-family-form-who-is-this-visa-for');
  if (rn_family_form_who_is_this_visa_for) {
    gsap.from('#rn-family-form-who-is-this-visa-for input, #rn-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_list_required_documents = document.getElementById('rn-family-list-required-documents');
  if (rn_family_list_required_documents) {
    gsap.from('#rn-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_list_application_process = document.getElementById('rn-family-list-application-process');
  if (rn_family_list_application_process) {
    gsap.from('#rn-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_section_timelines_deadlines = document.getElementById('rn-family-section-timelines-deadlines');
  if (rn_family_section_timelines_deadlines) {
    gsap.fromTo('#rn-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_section_fees_costs = document.getElementById('rn-family-section-fees-costs');
  if (rn_family_section_fees_costs) {
    gsap.fromTo('#rn-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_list_risks_common_mistakes = document.getElementById('rn-family-list-risks-common-mistakes');
  if (rn_family_list_risks_common_mistakes) {
    gsap.from('#rn-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_section_diy_vs_professional_assistance = document.getElementById('rn-family-section-diy-vs-professional-assistance');
  if (rn_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_section_rio_grande_do_norte_specific_context = document.getElementById('rn-family-section-rio-grande-do-norte-specific-context');
  if (rn_family_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-family-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_section_what_our_clients_say = document.getElementById('rn-family-section-what-our-clients-say');
  if (rn_family_section_what_our_clients_say) {
    gsap.fromTo('#rn-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_section_frequently_asked_questions = document.getElementById('rn-family-section-frequently-asked-questions');
  if (rn_family_section_frequently_asked_questions) {
    gsap.fromTo('#rn-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_section_international_support = document.getElementById('rn-family-section-international-support');
  if (rn_family_section_international_support) {
    gsap.fromTo('#rn-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_list_our_credentials = document.getElementById('rn-family-list-our-credentials');
  if (rn_family_list_our_credentials) {
    gsap.from('#rn-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_list_related_services = document.getElementById('rn-family-list-related-services');
  if (rn_family_list_related_services) {
    gsap.from('#rn-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_section_youre_in_good_hands = document.getElementById('rn-family-section-youre-in-good-hands');
  if (rn_family_section_youre_in_good_hands) {
    gsap.fromTo('#rn-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_family_section_21 = document.getElementById('rn-family-section-21');
  if (rn_family_section_21) {
    gsap.fromTo('#rn-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('rn-sports-form-compete-in-brazil-with-the-sports-visa');
  if (rn_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#rn-sports-form-compete-in-brazil-with-the-sports-visa input, #rn-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_list_quick_facts = document.getElementById('rn-sports-list-quick-facts');
  if (rn_sports_list_quick_facts) {
    gsap.from('#rn-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_list_common_challenges_applicants_face = document.getElementById('rn-sports-list-common-challenges-applicants-face');
  if (rn_sports_list_common_challenges_applicants_face) {
    gsap.from('#rn-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_list_how_we_solve_these_challenges = document.getElementById('rn-sports-list-how-we-solve-these-challenges');
  if (rn_sports_list_how_we_solve_these_challenges) {
    gsap.from('#rn-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_section_visa_overview = document.getElementById('rn-sports-section-visa-overview');
  if (rn_sports_section_visa_overview) {
    gsap.fromTo('#rn-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_form_who_is_this_visa_for = document.getElementById('rn-sports-form-who-is-this-visa-for');
  if (rn_sports_form_who_is_this_visa_for) {
    gsap.from('#rn-sports-form-who-is-this-visa-for input, #rn-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_list_required_documents = document.getElementById('rn-sports-list-required-documents');
  if (rn_sports_list_required_documents) {
    gsap.from('#rn-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_list_application_process = document.getElementById('rn-sports-list-application-process');
  if (rn_sports_list_application_process) {
    gsap.from('#rn-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_section_timelines_deadlines = document.getElementById('rn-sports-section-timelines-deadlines');
  if (rn_sports_section_timelines_deadlines) {
    gsap.fromTo('#rn-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_section_fees_costs = document.getElementById('rn-sports-section-fees-costs');
  if (rn_sports_section_fees_costs) {
    gsap.fromTo('#rn-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_list_risks_common_mistakes = document.getElementById('rn-sports-list-risks-common-mistakes');
  if (rn_sports_list_risks_common_mistakes) {
    gsap.from('#rn-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_section_diy_vs_professional_assistance = document.getElementById('rn-sports-section-diy-vs-professional-assistance');
  if (rn_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_section_rio_grande_do_norte_specific_context = document.getElementById('rn-sports-section-rio-grande-do-norte-specific-context');
  if (rn_sports_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-sports-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_section_what_our_clients_say = document.getElementById('rn-sports-section-what-our-clients-say');
  if (rn_sports_section_what_our_clients_say) {
    gsap.fromTo('#rn-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_section_frequently_asked_questions = document.getElementById('rn-sports-section-frequently-asked-questions');
  if (rn_sports_section_frequently_asked_questions) {
    gsap.fromTo('#rn-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_section_international_support = document.getElementById('rn-sports-section-international-support');
  if (rn_sports_section_international_support) {
    gsap.fromTo('#rn-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_list_our_credentials = document.getElementById('rn-sports-list-our-credentials');
  if (rn_sports_list_our_credentials) {
    gsap.from('#rn-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_list_related_services = document.getElementById('rn-sports-list-related-services');
  if (rn_sports_list_related_services) {
    gsap.from('#rn-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_section_youre_in_good_hands = document.getElementById('rn-sports-section-youre-in-good-hands');
  if (rn_sports_section_youre_in_good_hands) {
    gsap.fromTo('#rn-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_sports_section_21 = document.getElementById('rn-sports-section-21');
  if (rn_sports_section_21) {
    gsap.fromTo('#rn-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('rn-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (rn_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#rn-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #rn-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_list_quick_facts = document.getElementById('rn-medical-list-quick-facts');
  if (rn_medical_list_quick_facts) {
    gsap.from('#rn-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_list_common_challenges_applicants_face = document.getElementById('rn-medical-list-common-challenges-applicants-face');
  if (rn_medical_list_common_challenges_applicants_face) {
    gsap.from('#rn-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_list_how_we_solve_these_challenges = document.getElementById('rn-medical-list-how-we-solve-these-challenges');
  if (rn_medical_list_how_we_solve_these_challenges) {
    gsap.from('#rn-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_section_visa_overview = document.getElementById('rn-medical-section-visa-overview');
  if (rn_medical_section_visa_overview) {
    gsap.fromTo('#rn-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_form_who_is_this_visa_for = document.getElementById('rn-medical-form-who-is-this-visa-for');
  if (rn_medical_form_who_is_this_visa_for) {
    gsap.from('#rn-medical-form-who-is-this-visa-for input, #rn-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_list_required_documents = document.getElementById('rn-medical-list-required-documents');
  if (rn_medical_list_required_documents) {
    gsap.from('#rn-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_list_application_process = document.getElementById('rn-medical-list-application-process');
  if (rn_medical_list_application_process) {
    gsap.from('#rn-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_section_timelines_deadlines = document.getElementById('rn-medical-section-timelines-deadlines');
  if (rn_medical_section_timelines_deadlines) {
    gsap.fromTo('#rn-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_section_fees_costs = document.getElementById('rn-medical-section-fees-costs');
  if (rn_medical_section_fees_costs) {
    gsap.fromTo('#rn-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_list_risks_common_mistakes = document.getElementById('rn-medical-list-risks-common-mistakes');
  if (rn_medical_list_risks_common_mistakes) {
    gsap.from('#rn-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_section_diy_vs_professional_assistance = document.getElementById('rn-medical-section-diy-vs-professional-assistance');
  if (rn_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_section_rio_grande_do_norte_specific_context = document.getElementById('rn-medical-section-rio-grande-do-norte-specific-context');
  if (rn_medical_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-medical-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_section_what_our_clients_say = document.getElementById('rn-medical-section-what-our-clients-say');
  if (rn_medical_section_what_our_clients_say) {
    gsap.fromTo('#rn-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_section_frequently_asked_questions = document.getElementById('rn-medical-section-frequently-asked-questions');
  if (rn_medical_section_frequently_asked_questions) {
    gsap.fromTo('#rn-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_section_international_support = document.getElementById('rn-medical-section-international-support');
  if (rn_medical_section_international_support) {
    gsap.fromTo('#rn-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_list_our_credentials = document.getElementById('rn-medical-list-our-credentials');
  if (rn_medical_list_our_credentials) {
    gsap.from('#rn-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_list_related_services = document.getElementById('rn-medical-list-related-services');
  if (rn_medical_list_related_services) {
    gsap.from('#rn-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_section_youre_in_good_hands = document.getElementById('rn-medical-section-youre-in-good-hands');
  if (rn_medical_section_youre_in_good_hands) {
    gsap.fromTo('#rn-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_medical_section_21 = document.getElementById('rn-medical-section-21');
  if (rn_medical_section_21) {
    gsap.fromTo('#rn-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('rn-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (rn_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#rn-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #rn-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_list_quick_facts = document.getElementById('rn-tourist-list-quick-facts');
  if (rn_tourist_list_quick_facts) {
    gsap.from('#rn-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_list_common_challenges_applicants_face = document.getElementById('rn-tourist-list-common-challenges-applicants-face');
  if (rn_tourist_list_common_challenges_applicants_face) {
    gsap.from('#rn-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_list_how_we_solve_these_challenges = document.getElementById('rn-tourist-list-how-we-solve-these-challenges');
  if (rn_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#rn-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_section_visa_overview = document.getElementById('rn-tourist-section-visa-overview');
  if (rn_tourist_section_visa_overview) {
    gsap.fromTo('#rn-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_form_who_is_this_visa_for = document.getElementById('rn-tourist-form-who-is-this-visa-for');
  if (rn_tourist_form_who_is_this_visa_for) {
    gsap.from('#rn-tourist-form-who-is-this-visa-for input, #rn-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_list_required_documents = document.getElementById('rn-tourist-list-required-documents');
  if (rn_tourist_list_required_documents) {
    gsap.from('#rn-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_list_application_process = document.getElementById('rn-tourist-list-application-process');
  if (rn_tourist_list_application_process) {
    gsap.from('#rn-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_section_timelines_deadlines = document.getElementById('rn-tourist-section-timelines-deadlines');
  if (rn_tourist_section_timelines_deadlines) {
    gsap.fromTo('#rn-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_section_fees_costs = document.getElementById('rn-tourist-section-fees-costs');
  if (rn_tourist_section_fees_costs) {
    gsap.fromTo('#rn-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_list_risks_common_mistakes = document.getElementById('rn-tourist-list-risks-common-mistakes');
  if (rn_tourist_list_risks_common_mistakes) {
    gsap.from('#rn-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_section_diy_vs_professional_assistance = document.getElementById('rn-tourist-section-diy-vs-professional-assistance');
  if (rn_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_section_rio_grande_do_norte_specific_context = document.getElementById('rn-tourist-section-rio-grande-do-norte-specific-context');
  if (rn_tourist_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-tourist-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_section_what_our_clients_say = document.getElementById('rn-tourist-section-what-our-clients-say');
  if (rn_tourist_section_what_our_clients_say) {
    gsap.fromTo('#rn-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_section_frequently_asked_questions = document.getElementById('rn-tourist-section-frequently-asked-questions');
  if (rn_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#rn-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_section_international_support = document.getElementById('rn-tourist-section-international-support');
  if (rn_tourist_section_international_support) {
    gsap.fromTo('#rn-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_list_our_credentials = document.getElementById('rn-tourist-list-our-credentials');
  if (rn_tourist_list_our_credentials) {
    gsap.from('#rn-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_list_related_services = document.getElementById('rn-tourist-list-related-services');
  if (rn_tourist_list_related_services) {
    gsap.from('#rn-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_section_youre_in_good_hands = document.getElementById('rn-tourist-section-youre-in-good-hands');
  if (rn_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#rn-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_tourist_section_21 = document.getElementById('rn-tourist-section-21');
  if (rn_tourist_section_21) {
    gsap.fromTo('#rn-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('rn-transit-form-transit-through-brazil-with-the-transit-visa');
  if (rn_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#rn-transit-form-transit-through-brazil-with-the-transit-visa input, #rn-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_list_quick_facts = document.getElementById('rn-transit-list-quick-facts');
  if (rn_transit_list_quick_facts) {
    gsap.from('#rn-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_list_common_challenges_applicants_face = document.getElementById('rn-transit-list-common-challenges-applicants-face');
  if (rn_transit_list_common_challenges_applicants_face) {
    gsap.from('#rn-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_list_how_we_solve_these_challenges = document.getElementById('rn-transit-list-how-we-solve-these-challenges');
  if (rn_transit_list_how_we_solve_these_challenges) {
    gsap.from('#rn-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_section_visa_overview = document.getElementById('rn-transit-section-visa-overview');
  if (rn_transit_section_visa_overview) {
    gsap.fromTo('#rn-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_form_who_is_this_visa_for = document.getElementById('rn-transit-form-who-is-this-visa-for');
  if (rn_transit_form_who_is_this_visa_for) {
    gsap.from('#rn-transit-form-who-is-this-visa-for input, #rn-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_list_required_documents = document.getElementById('rn-transit-list-required-documents');
  if (rn_transit_list_required_documents) {
    gsap.from('#rn-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_list_application_process = document.getElementById('rn-transit-list-application-process');
  if (rn_transit_list_application_process) {
    gsap.from('#rn-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_section_timelines_deadlines = document.getElementById('rn-transit-section-timelines-deadlines');
  if (rn_transit_section_timelines_deadlines) {
    gsap.fromTo('#rn-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_section_fees_costs = document.getElementById('rn-transit-section-fees-costs');
  if (rn_transit_section_fees_costs) {
    gsap.fromTo('#rn-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_list_risks_common_mistakes = document.getElementById('rn-transit-list-risks-common-mistakes');
  if (rn_transit_list_risks_common_mistakes) {
    gsap.from('#rn-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_section_diy_vs_professional_assistance = document.getElementById('rn-transit-section-diy-vs-professional-assistance');
  if (rn_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_section_rio_grande_do_norte_specific_context = document.getElementById('rn-transit-section-rio-grande-do-norte-specific-context');
  if (rn_transit_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-transit-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_section_what_our_clients_say = document.getElementById('rn-transit-section-what-our-clients-say');
  if (rn_transit_section_what_our_clients_say) {
    gsap.fromTo('#rn-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_section_frequently_asked_questions = document.getElementById('rn-transit-section-frequently-asked-questions');
  if (rn_transit_section_frequently_asked_questions) {
    gsap.fromTo('#rn-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_section_international_support = document.getElementById('rn-transit-section-international-support');
  if (rn_transit_section_international_support) {
    gsap.fromTo('#rn-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_list_our_credentials = document.getElementById('rn-transit-list-our-credentials');
  if (rn_transit_list_our_credentials) {
    gsap.from('#rn-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_list_related_services = document.getElementById('rn-transit-list-related-services');
  if (rn_transit_list_related_services) {
    gsap.from('#rn-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_section_youre_in_good_hands = document.getElementById('rn-transit-section-youre-in-good-hands');
  if (rn_transit_section_youre_in_good_hands) {
    gsap.fromTo('#rn-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_transit_section_21 = document.getElementById('rn-transit-section-21');
  if (rn_transit_section_21) {
    gsap.fromTo('#rn-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_form_study_in_brazil_with_the_student_visa = document.getElementById('rn-student-form-study-in-brazil-with-the-student-visa');
  if (rn_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#rn-student-form-study-in-brazil-with-the-student-visa input, #rn-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_list_quick_facts = document.getElementById('rn-student-list-quick-facts');
  if (rn_student_list_quick_facts) {
    gsap.from('#rn-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_list_common_challenges_applicants_face = document.getElementById('rn-student-list-common-challenges-applicants-face');
  if (rn_student_list_common_challenges_applicants_face) {
    gsap.from('#rn-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_list_how_we_solve_these_challenges = document.getElementById('rn-student-list-how-we-solve-these-challenges');
  if (rn_student_list_how_we_solve_these_challenges) {
    gsap.from('#rn-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_section_visa_overview = document.getElementById('rn-student-section-visa-overview');
  if (rn_student_section_visa_overview) {
    gsap.fromTo('#rn-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_form_who_is_this_visa_for = document.getElementById('rn-student-form-who-is-this-visa-for');
  if (rn_student_form_who_is_this_visa_for) {
    gsap.from('#rn-student-form-who-is-this-visa-for input, #rn-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_list_required_documents = document.getElementById('rn-student-list-required-documents');
  if (rn_student_list_required_documents) {
    gsap.from('#rn-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_list_application_process = document.getElementById('rn-student-list-application-process');
  if (rn_student_list_application_process) {
    gsap.from('#rn-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_section_timelines_deadlines = document.getElementById('rn-student-section-timelines-deadlines');
  if (rn_student_section_timelines_deadlines) {
    gsap.fromTo('#rn-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_section_fees_costs = document.getElementById('rn-student-section-fees-costs');
  if (rn_student_section_fees_costs) {
    gsap.fromTo('#rn-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_list_risks_common_mistakes = document.getElementById('rn-student-list-risks-common-mistakes');
  if (rn_student_list_risks_common_mistakes) {
    gsap.from('#rn-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_section_diy_vs_professional_assistance = document.getElementById('rn-student-section-diy-vs-professional-assistance');
  if (rn_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_section_rio_grande_do_norte_specific_context = document.getElementById('rn-student-section-rio-grande-do-norte-specific-context');
  if (rn_student_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-student-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_section_what_our_clients_say = document.getElementById('rn-student-section-what-our-clients-say');
  if (rn_student_section_what_our_clients_say) {
    gsap.fromTo('#rn-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_section_frequently_asked_questions = document.getElementById('rn-student-section-frequently-asked-questions');
  if (rn_student_section_frequently_asked_questions) {
    gsap.fromTo('#rn-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_section_international_support = document.getElementById('rn-student-section-international-support');
  if (rn_student_section_international_support) {
    gsap.fromTo('#rn-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_list_our_credentials = document.getElementById('rn-student-list-our-credentials');
  if (rn_student_list_our_credentials) {
    gsap.from('#rn-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_list_related_services = document.getElementById('rn-student-list-related-services');
  if (rn_student_list_related_services) {
    gsap.from('#rn-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_section_youre_in_good_hands = document.getElementById('rn-student-section-youre-in-good-hands');
  if (rn_student_section_youre_in_good_hands) {
    gsap.fromTo('#rn-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_student_section_21 = document.getElementById('rn-student-section-21');
  if (rn_student_section_21) {
    gsap.fromTo('#rn-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('rn-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (rn_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#rn-business-form-conduct-business-in-brazil-with-the-business-visa input, #rn-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_list_quick_facts = document.getElementById('rn-business-list-quick-facts');
  if (rn_business_list_quick_facts) {
    gsap.from('#rn-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_list_common_challenges_applicants_face = document.getElementById('rn-business-list-common-challenges-applicants-face');
  if (rn_business_list_common_challenges_applicants_face) {
    gsap.from('#rn-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_list_how_we_solve_these_challenges = document.getElementById('rn-business-list-how-we-solve-these-challenges');
  if (rn_business_list_how_we_solve_these_challenges) {
    gsap.from('#rn-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_section_visa_overview = document.getElementById('rn-business-section-visa-overview');
  if (rn_business_section_visa_overview) {
    gsap.fromTo('#rn-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_form_who_is_this_visa_for = document.getElementById('rn-business-form-who-is-this-visa-for');
  if (rn_business_form_who_is_this_visa_for) {
    gsap.from('#rn-business-form-who-is-this-visa-for input, #rn-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_list_required_documents = document.getElementById('rn-business-list-required-documents');
  if (rn_business_list_required_documents) {
    gsap.from('#rn-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_list_application_process = document.getElementById('rn-business-list-application-process');
  if (rn_business_list_application_process) {
    gsap.from('#rn-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_section_timelines_deadlines = document.getElementById('rn-business-section-timelines-deadlines');
  if (rn_business_section_timelines_deadlines) {
    gsap.fromTo('#rn-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_section_fees_costs = document.getElementById('rn-business-section-fees-costs');
  if (rn_business_section_fees_costs) {
    gsap.fromTo('#rn-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_list_risks_common_mistakes = document.getElementById('rn-business-list-risks-common-mistakes');
  if (rn_business_list_risks_common_mistakes) {
    gsap.from('#rn-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_section_diy_vs_professional_assistance = document.getElementById('rn-business-section-diy-vs-professional-assistance');
  if (rn_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_section_rio_grande_do_norte_specific_context = document.getElementById('rn-business-section-rio-grande-do-norte-specific-context');
  if (rn_business_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-business-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_section_what_our_clients_say = document.getElementById('rn-business-section-what-our-clients-say');
  if (rn_business_section_what_our_clients_say) {
    gsap.fromTo('#rn-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_section_frequently_asked_questions = document.getElementById('rn-business-section-frequently-asked-questions');
  if (rn_business_section_frequently_asked_questions) {
    gsap.fromTo('#rn-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_section_international_support = document.getElementById('rn-business-section-international-support');
  if (rn_business_section_international_support) {
    gsap.fromTo('#rn-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_list_our_credentials = document.getElementById('rn-business-list-our-credentials');
  if (rn_business_list_our_credentials) {
    gsap.from('#rn-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_list_related_services = document.getElementById('rn-business-list-related-services');
  if (rn_business_list_related_services) {
    gsap.from('#rn-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_section_youre_in_good_hands = document.getElementById('rn-business-section-youre-in-good-hands');
  if (rn_business_section_youre_in_good_hands) {
    gsap.fromTo('#rn-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_business_section_21 = document.getElementById('rn-business-section-21');
  if (rn_business_section_21) {
    gsap.fromTo('#rn-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('rn-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (rn_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#rn-research-form-conduct-research-in-brazil-with-the-research-visa input, #rn-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_list_quick_facts = document.getElementById('rn-research-list-quick-facts');
  if (rn_research_list_quick_facts) {
    gsap.from('#rn-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_list_common_challenges_applicants_face = document.getElementById('rn-research-list-common-challenges-applicants-face');
  if (rn_research_list_common_challenges_applicants_face) {
    gsap.from('#rn-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_list_how_we_solve_these_challenges = document.getElementById('rn-research-list-how-we-solve-these-challenges');
  if (rn_research_list_how_we_solve_these_challenges) {
    gsap.from('#rn-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_section_visa_overview = document.getElementById('rn-research-section-visa-overview');
  if (rn_research_section_visa_overview) {
    gsap.fromTo('#rn-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_form_who_is_this_visa_for = document.getElementById('rn-research-form-who-is-this-visa-for');
  if (rn_research_form_who_is_this_visa_for) {
    gsap.from('#rn-research-form-who-is-this-visa-for input, #rn-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_list_required_documents = document.getElementById('rn-research-list-required-documents');
  if (rn_research_list_required_documents) {
    gsap.from('#rn-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_list_application_process = document.getElementById('rn-research-list-application-process');
  if (rn_research_list_application_process) {
    gsap.from('#rn-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_section_timelines_deadlines = document.getElementById('rn-research-section-timelines-deadlines');
  if (rn_research_section_timelines_deadlines) {
    gsap.fromTo('#rn-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_section_fees_costs = document.getElementById('rn-research-section-fees-costs');
  if (rn_research_section_fees_costs) {
    gsap.fromTo('#rn-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_list_risks_common_mistakes = document.getElementById('rn-research-list-risks-common-mistakes');
  if (rn_research_list_risks_common_mistakes) {
    gsap.from('#rn-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_section_diy_vs_professional_assistance = document.getElementById('rn-research-section-diy-vs-professional-assistance');
  if (rn_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_section_rio_grande_do_norte_specific_context = document.getElementById('rn-research-section-rio-grande-do-norte-specific-context');
  if (rn_research_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-research-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_section_what_our_clients_say = document.getElementById('rn-research-section-what-our-clients-say');
  if (rn_research_section_what_our_clients_say) {
    gsap.fromTo('#rn-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_section_frequently_asked_questions = document.getElementById('rn-research-section-frequently-asked-questions');
  if (rn_research_section_frequently_asked_questions) {
    gsap.fromTo('#rn-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_section_international_support = document.getElementById('rn-research-section-international-support');
  if (rn_research_section_international_support) {
    gsap.fromTo('#rn-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_list_our_credentials = document.getElementById('rn-research-list-our-credentials');
  if (rn_research_list_our_credentials) {
    gsap.from('#rn-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_list_related_services = document.getElementById('rn-research-list-related-services');
  if (rn_research_list_related_services) {
    gsap.from('#rn-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_section_youre_in_good_hands = document.getElementById('rn-research-section-youre-in-good-hands');
  if (rn_research_section_youre_in_good_hands) {
    gsap.fromTo('#rn-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_research_section_21 = document.getElementById('rn-research-section-21');
  if (rn_research_section_21) {
    gsap.fromTo('#rn-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('rn-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (rn_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#rn-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #rn-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_list_quick_facts = document.getElementById('rn-diplomatic-list-quick-facts');
  if (rn_diplomatic_list_quick_facts) {
    gsap.from('#rn-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_list_common_challenges_applicants_face = document.getElementById('rn-diplomatic-list-common-challenges-applicants-face');
  if (rn_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#rn-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_list_how_we_solve_these_challenges = document.getElementById('rn-diplomatic-list-how-we-solve-these-challenges');
  if (rn_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#rn-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_section_visa_overview = document.getElementById('rn-diplomatic-section-visa-overview');
  if (rn_diplomatic_section_visa_overview) {
    gsap.fromTo('#rn-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_form_who_is_this_visa_for = document.getElementById('rn-diplomatic-form-who-is-this-visa-for');
  if (rn_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#rn-diplomatic-form-who-is-this-visa-for input, #rn-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_list_required_documents = document.getElementById('rn-diplomatic-list-required-documents');
  if (rn_diplomatic_list_required_documents) {
    gsap.from('#rn-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_list_application_process = document.getElementById('rn-diplomatic-list-application-process');
  if (rn_diplomatic_list_application_process) {
    gsap.from('#rn-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_section_timelines_deadlines = document.getElementById('rn-diplomatic-section-timelines-deadlines');
  if (rn_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#rn-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_section_fees_costs = document.getElementById('rn-diplomatic-section-fees-costs');
  if (rn_diplomatic_section_fees_costs) {
    gsap.fromTo('#rn-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_list_risks_common_mistakes = document.getElementById('rn-diplomatic-list-risks-common-mistakes');
  if (rn_diplomatic_list_risks_common_mistakes) {
    gsap.from('#rn-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_section_diy_vs_professional_assistance = document.getElementById('rn-diplomatic-section-diy-vs-professional-assistance');
  if (rn_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_section_rio_grande_do_norte_specific_context = document.getElementById('rn-diplomatic-section-rio-grande-do-norte-specific-context');
  if (rn_diplomatic_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-diplomatic-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_section_what_our_clients_say = document.getElementById('rn-diplomatic-section-what-our-clients-say');
  if (rn_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#rn-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_section_frequently_asked_questions = document.getElementById('rn-diplomatic-section-frequently-asked-questions');
  if (rn_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#rn-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_section_international_support = document.getElementById('rn-diplomatic-section-international-support');
  if (rn_diplomatic_section_international_support) {
    gsap.fromTo('#rn-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_list_our_credentials = document.getElementById('rn-diplomatic-list-our-credentials');
  if (rn_diplomatic_list_our_credentials) {
    gsap.from('#rn-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_list_related_services = document.getElementById('rn-diplomatic-list-related-services');
  if (rn_diplomatic_list_related_services) {
    gsap.from('#rn-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_section_youre_in_good_hands = document.getElementById('rn-diplomatic-section-youre-in-good-hands');
  if (rn_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#rn-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_diplomatic_section_21 = document.getElementById('rn-diplomatic-section-21');
  if (rn_diplomatic_section_21) {
    gsap.fromTo('#rn-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('rn-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (rn_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#rn-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #rn-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_list_quick_facts = document.getElementById('rn-journalist-list-quick-facts');
  if (rn_journalist_list_quick_facts) {
    gsap.from('#rn-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_list_common_challenges_applicants_face = document.getElementById('rn-journalist-list-common-challenges-applicants-face');
  if (rn_journalist_list_common_challenges_applicants_face) {
    gsap.from('#rn-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_list_how_we_solve_these_challenges = document.getElementById('rn-journalist-list-how-we-solve-these-challenges');
  if (rn_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#rn-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_section_visa_overview = document.getElementById('rn-journalist-section-visa-overview');
  if (rn_journalist_section_visa_overview) {
    gsap.fromTo('#rn-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_form_who_is_this_visa_for = document.getElementById('rn-journalist-form-who-is-this-visa-for');
  if (rn_journalist_form_who_is_this_visa_for) {
    gsap.from('#rn-journalist-form-who-is-this-visa-for input, #rn-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_list_required_documents = document.getElementById('rn-journalist-list-required-documents');
  if (rn_journalist_list_required_documents) {
    gsap.from('#rn-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_list_application_process = document.getElementById('rn-journalist-list-application-process');
  if (rn_journalist_list_application_process) {
    gsap.from('#rn-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_section_timelines_deadlines = document.getElementById('rn-journalist-section-timelines-deadlines');
  if (rn_journalist_section_timelines_deadlines) {
    gsap.fromTo('#rn-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_section_fees_costs = document.getElementById('rn-journalist-section-fees-costs');
  if (rn_journalist_section_fees_costs) {
    gsap.fromTo('#rn-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_list_risks_common_mistakes = document.getElementById('rn-journalist-list-risks-common-mistakes');
  if (rn_journalist_list_risks_common_mistakes) {
    gsap.from('#rn-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_section_diy_vs_professional_assistance = document.getElementById('rn-journalist-section-diy-vs-professional-assistance');
  if (rn_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_section_rio_grande_do_norte_specific_context = document.getElementById('rn-journalist-section-rio-grande-do-norte-specific-context');
  if (rn_journalist_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-journalist-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_section_what_our_clients_say = document.getElementById('rn-journalist-section-what-our-clients-say');
  if (rn_journalist_section_what_our_clients_say) {
    gsap.fromTo('#rn-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_section_frequently_asked_questions = document.getElementById('rn-journalist-section-frequently-asked-questions');
  if (rn_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#rn-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_section_international_support = document.getElementById('rn-journalist-section-international-support');
  if (rn_journalist_section_international_support) {
    gsap.fromTo('#rn-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_list_our_credentials = document.getElementById('rn-journalist-list-our-credentials');
  if (rn_journalist_list_our_credentials) {
    gsap.from('#rn-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_list_related_services = document.getElementById('rn-journalist-list-related-services');
  if (rn_journalist_list_related_services) {
    gsap.from('#rn-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_section_youre_in_good_hands = document.getElementById('rn-journalist-section-youre-in-good-hands');
  if (rn_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#rn-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_journalist_section_21 = document.getElementById('rn-journalist-section-21');
  if (rn_journalist_section_21) {
    gsap.fromTo('#rn-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('rn-fines-form-resolve-immigration-fines-in-brazil');
  if (rn_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#rn-fines-form-resolve-immigration-fines-in-brazil input, #rn-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_list_quick_facts = document.getElementById('rn-fines-list-quick-facts');
  if (rn_fines_list_quick_facts) {
    gsap.from('#rn-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_list_common_challenges_applicants_face = document.getElementById('rn-fines-list-common-challenges-applicants-face');
  if (rn_fines_list_common_challenges_applicants_face) {
    gsap.from('#rn-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_list_how_we_solve_these_challenges = document.getElementById('rn-fines-list-how-we-solve-these-challenges');
  if (rn_fines_list_how_we_solve_these_challenges) {
    gsap.from('#rn-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_section_service_overview = document.getElementById('rn-fines-section-service-overview');
  if (rn_fines_section_service_overview) {
    gsap.fromTo('#rn-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_form_who_is_this_service_for = document.getElementById('rn-fines-form-who-is-this-service-for');
  if (rn_fines_form_who_is_this_service_for) {
    gsap.from('#rn-fines-form-who-is-this-service-for input, #rn-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_list_required_documents = document.getElementById('rn-fines-list-required-documents');
  if (rn_fines_list_required_documents) {
    gsap.from('#rn-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_list_process = document.getElementById('rn-fines-list-process');
  if (rn_fines_list_process) {
    gsap.from('#rn-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_section_timelines_deadlines = document.getElementById('rn-fines-section-timelines-deadlines');
  if (rn_fines_section_timelines_deadlines) {
    gsap.fromTo('#rn-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_section_fees_costs = document.getElementById('rn-fines-section-fees-costs');
  if (rn_fines_section_fees_costs) {
    gsap.fromTo('#rn-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_list_risks_common_mistakes = document.getElementById('rn-fines-list-risks-common-mistakes');
  if (rn_fines_list_risks_common_mistakes) {
    gsap.from('#rn-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_section_diy_vs_professional_assistance = document.getElementById('rn-fines-section-diy-vs-professional-assistance');
  if (rn_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_section_rio_grande_do_norte_specific_context = document.getElementById('rn-fines-section-rio-grande-do-norte-specific-context');
  if (rn_fines_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-fines-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_section_what_our_clients_say = document.getElementById('rn-fines-section-what-our-clients-say');
  if (rn_fines_section_what_our_clients_say) {
    gsap.fromTo('#rn-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_section_frequently_asked_questions = document.getElementById('rn-fines-section-frequently-asked-questions');
  if (rn_fines_section_frequently_asked_questions) {
    gsap.fromTo('#rn-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_section_international_support = document.getElementById('rn-fines-section-international-support');
  if (rn_fines_section_international_support) {
    gsap.fromTo('#rn-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_list_our_credentials = document.getElementById('rn-fines-list-our-credentials');
  if (rn_fines_list_our_credentials) {
    gsap.from('#rn-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_list_related_services = document.getElementById('rn-fines-list-related-services');
  if (rn_fines_list_related_services) {
    gsap.from('#rn-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_section_youre_in_good_hands = document.getElementById('rn-fines-section-youre-in-good-hands');
  if (rn_fines_section_youre_in_good_hands) {
    gsap.fromTo('#rn-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_fines_section_21 = document.getElementById('rn-fines-section-21');
  if (rn_fines_section_21) {
    gsap.fromTo('#rn-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_form_deportation_assistance_in_brazil = document.getElementById('rn-deportation-form-deportation-assistance-in-brazil');
  if (rn_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#rn-deportation-form-deportation-assistance-in-brazil input, #rn-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_list_quick_facts = document.getElementById('rn-deportation-list-quick-facts');
  if (rn_deportation_list_quick_facts) {
    gsap.from('#rn-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_list_common_challenges_applicants_face = document.getElementById('rn-deportation-list-common-challenges-applicants-face');
  if (rn_deportation_list_common_challenges_applicants_face) {
    gsap.from('#rn-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_list_how_we_solve_these_challenges = document.getElementById('rn-deportation-list-how-we-solve-these-challenges');
  if (rn_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#rn-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_section_service_overview = document.getElementById('rn-deportation-section-service-overview');
  if (rn_deportation_section_service_overview) {
    gsap.fromTo('#rn-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_form_who_is_this_service_for = document.getElementById('rn-deportation-form-who-is-this-service-for');
  if (rn_deportation_form_who_is_this_service_for) {
    gsap.from('#rn-deportation-form-who-is-this-service-for input, #rn-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_list_required_documents = document.getElementById('rn-deportation-list-required-documents');
  if (rn_deportation_list_required_documents) {
    gsap.from('#rn-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_list_process = document.getElementById('rn-deportation-list-process');
  if (rn_deportation_list_process) {
    gsap.from('#rn-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_section_timelines_deadlines = document.getElementById('rn-deportation-section-timelines-deadlines');
  if (rn_deportation_section_timelines_deadlines) {
    gsap.fromTo('#rn-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_section_fees_costs = document.getElementById('rn-deportation-section-fees-costs');
  if (rn_deportation_section_fees_costs) {
    gsap.fromTo('#rn-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_list_risks_common_mistakes = document.getElementById('rn-deportation-list-risks-common-mistakes');
  if (rn_deportation_list_risks_common_mistakes) {
    gsap.from('#rn-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_section_diy_vs_professional_assistance = document.getElementById('rn-deportation-section-diy-vs-professional-assistance');
  if (rn_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_section_rio_grande_do_norte_specific_context = document.getElementById('rn-deportation-section-rio-grande-do-norte-specific-context');
  if (rn_deportation_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-deportation-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_section_what_our_clients_say = document.getElementById('rn-deportation-section-what-our-clients-say');
  if (rn_deportation_section_what_our_clients_say) {
    gsap.fromTo('#rn-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_section_frequently_asked_questions = document.getElementById('rn-deportation-section-frequently-asked-questions');
  if (rn_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#rn-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_section_international_support = document.getElementById('rn-deportation-section-international-support');
  if (rn_deportation_section_international_support) {
    gsap.fromTo('#rn-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_list_our_credentials = document.getElementById('rn-deportation-list-our-credentials');
  if (rn_deportation_list_our_credentials) {
    gsap.from('#rn-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_list_related_services = document.getElementById('rn-deportation-list-related-services');
  if (rn_deportation_list_related_services) {
    gsap.from('#rn-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_section_youre_in_good_hands = document.getElementById('rn-deportation-section-youre-in-good-hands');
  if (rn_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#rn-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_deportation_section_21 = document.getElementById('rn-deportation-section-21');
  if (rn_deportation_section_21) {
    gsap.fromTo('#rn-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('rn-translation-form-sworn-document-translation-services-in-brazil');
  if (rn_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#rn-translation-form-sworn-document-translation-services-in-brazil input, #rn-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_list_quick_facts = document.getElementById('rn-translation-list-quick-facts');
  if (rn_translation_list_quick_facts) {
    gsap.from('#rn-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_list_common_challenges_applicants_face = document.getElementById('rn-translation-list-common-challenges-applicants-face');
  if (rn_translation_list_common_challenges_applicants_face) {
    gsap.from('#rn-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_list_how_we_solve_these_challenges = document.getElementById('rn-translation-list-how-we-solve-these-challenges');
  if (rn_translation_list_how_we_solve_these_challenges) {
    gsap.from('#rn-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_section_service_overview = document.getElementById('rn-translation-section-service-overview');
  if (rn_translation_section_service_overview) {
    gsap.fromTo('#rn-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_form_who_is_this_service_for = document.getElementById('rn-translation-form-who-is-this-service-for');
  if (rn_translation_form_who_is_this_service_for) {
    gsap.from('#rn-translation-form-who-is-this-service-for input, #rn-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_list_required_documents = document.getElementById('rn-translation-list-required-documents');
  if (rn_translation_list_required_documents) {
    gsap.from('#rn-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_list_process = document.getElementById('rn-translation-list-process');
  if (rn_translation_list_process) {
    gsap.from('#rn-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_section_timelines_deadlines = document.getElementById('rn-translation-section-timelines-deadlines');
  if (rn_translation_section_timelines_deadlines) {
    gsap.fromTo('#rn-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_section_fees_costs = document.getElementById('rn-translation-section-fees-costs');
  if (rn_translation_section_fees_costs) {
    gsap.fromTo('#rn-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_list_risks_common_mistakes = document.getElementById('rn-translation-list-risks-common-mistakes');
  if (rn_translation_list_risks_common_mistakes) {
    gsap.from('#rn-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_section_diy_vs_professional_assistance = document.getElementById('rn-translation-section-diy-vs-professional-assistance');
  if (rn_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_section_rio_grande_do_norte_specific_context = document.getElementById('rn-translation-section-rio-grande-do-norte-specific-context');
  if (rn_translation_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-translation-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_section_what_our_clients_say = document.getElementById('rn-translation-section-what-our-clients-say');
  if (rn_translation_section_what_our_clients_say) {
    gsap.fromTo('#rn-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_section_frequently_asked_questions = document.getElementById('rn-translation-section-frequently-asked-questions');
  if (rn_translation_section_frequently_asked_questions) {
    gsap.fromTo('#rn-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_section_international_support = document.getElementById('rn-translation-section-international-support');
  if (rn_translation_section_international_support) {
    gsap.fromTo('#rn-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_list_our_credentials = document.getElementById('rn-translation-list-our-credentials');
  if (rn_translation_list_our_credentials) {
    gsap.from('#rn-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_list_related_services = document.getElementById('rn-translation-list-related-services');
  if (rn_translation_list_related_services) {
    gsap.from('#rn-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_section_youre_in_good_hands = document.getElementById('rn-translation-section-youre-in-good-hands');
  if (rn_translation_section_youre_in_good_hands) {
    gsap.fromTo('#rn-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_translation_section_21 = document.getElementById('rn-translation-section-21');
  if (rn_translation_section_21) {
    gsap.fromTo('#rn-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('rn-expulsion-form-expulsion-assistance-in-brazil');
  if (rn_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#rn-expulsion-form-expulsion-assistance-in-brazil input, #rn-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_list_quick_facts = document.getElementById('rn-expulsion-list-quick-facts');
  if (rn_expulsion_list_quick_facts) {
    gsap.from('#rn-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_list_common_challenges_applicants_face = document.getElementById('rn-expulsion-list-common-challenges-applicants-face');
  if (rn_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#rn-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_list_how_we_solve_these_challenges = document.getElementById('rn-expulsion-list-how-we-solve-these-challenges');
  if (rn_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#rn-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_section_service_overview = document.getElementById('rn-expulsion-section-service-overview');
  if (rn_expulsion_section_service_overview) {
    gsap.fromTo('#rn-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_form_who_is_this_service_for = document.getElementById('rn-expulsion-form-who-is-this-service-for');
  if (rn_expulsion_form_who_is_this_service_for) {
    gsap.from('#rn-expulsion-form-who-is-this-service-for input, #rn-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_list_required_documents = document.getElementById('rn-expulsion-list-required-documents');
  if (rn_expulsion_list_required_documents) {
    gsap.from('#rn-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_list_process = document.getElementById('rn-expulsion-list-process');
  if (rn_expulsion_list_process) {
    gsap.from('#rn-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_section_timelines_deadlines = document.getElementById('rn-expulsion-section-timelines-deadlines');
  if (rn_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#rn-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_section_fees_costs = document.getElementById('rn-expulsion-section-fees-costs');
  if (rn_expulsion_section_fees_costs) {
    gsap.fromTo('#rn-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_list_risks_common_mistakes = document.getElementById('rn-expulsion-list-risks-common-mistakes');
  if (rn_expulsion_list_risks_common_mistakes) {
    gsap.from('#rn-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_section_diy_vs_professional_assistance = document.getElementById('rn-expulsion-section-diy-vs-professional-assistance');
  if (rn_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_section_rio_grande_do_norte_specific_context = document.getElementById('rn-expulsion-section-rio-grande-do-norte-specific-context');
  if (rn_expulsion_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-expulsion-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_section_what_our_clients_say = document.getElementById('rn-expulsion-section-what-our-clients-say');
  if (rn_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#rn-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_section_frequently_asked_questions = document.getElementById('rn-expulsion-section-frequently-asked-questions');
  if (rn_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#rn-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_section_international_support = document.getElementById('rn-expulsion-section-international-support');
  if (rn_expulsion_section_international_support) {
    gsap.fromTo('#rn-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_list_our_credentials = document.getElementById('rn-expulsion-list-our-credentials');
  if (rn_expulsion_list_our_credentials) {
    gsap.from('#rn-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_list_related_services = document.getElementById('rn-expulsion-list-related-services');
  if (rn_expulsion_list_related_services) {
    gsap.from('#rn-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_section_youre_in_good_hands = document.getElementById('rn-expulsion-section-youre-in-good-hands');
  if (rn_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#rn-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_expulsion_section_21 = document.getElementById('rn-expulsion-section-21');
  if (rn_expulsion_section_21) {
    gsap.fromTo('#rn-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('rn-appeals-form-appeal-immigration-denials-in-brazil');
  if (rn_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#rn-appeals-form-appeal-immigration-denials-in-brazil input, #rn-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_list_quick_facts = document.getElementById('rn-appeals-list-quick-facts');
  if (rn_appeals_list_quick_facts) {
    gsap.from('#rn-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_list_common_challenges_applicants_face = document.getElementById('rn-appeals-list-common-challenges-applicants-face');
  if (rn_appeals_list_common_challenges_applicants_face) {
    gsap.from('#rn-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_list_how_we_solve_these_challenges = document.getElementById('rn-appeals-list-how-we-solve-these-challenges');
  if (rn_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#rn-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_section_service_overview = document.getElementById('rn-appeals-section-service-overview');
  if (rn_appeals_section_service_overview) {
    gsap.fromTo('#rn-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_form_who_is_this_service_for = document.getElementById('rn-appeals-form-who-is-this-service-for');
  if (rn_appeals_form_who_is_this_service_for) {
    gsap.from('#rn-appeals-form-who-is-this-service-for input, #rn-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_list_required_documents = document.getElementById('rn-appeals-list-required-documents');
  if (rn_appeals_list_required_documents) {
    gsap.from('#rn-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_list_appeal_process = document.getElementById('rn-appeals-list-appeal-process');
  if (rn_appeals_list_appeal_process) {
    gsap.from('#rn-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_section_timelines_deadlines = document.getElementById('rn-appeals-section-timelines-deadlines');
  if (rn_appeals_section_timelines_deadlines) {
    gsap.fromTo('#rn-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_section_fees_costs = document.getElementById('rn-appeals-section-fees-costs');
  if (rn_appeals_section_fees_costs) {
    gsap.fromTo('#rn-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_list_risks_common_mistakes = document.getElementById('rn-appeals-list-risks-common-mistakes');
  if (rn_appeals_list_risks_common_mistakes) {
    gsap.from('#rn-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_section_diy_vs_professional_assistance = document.getElementById('rn-appeals-section-diy-vs-professional-assistance');
  if (rn_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_section_rio_grande_do_norte_specific_context = document.getElementById('rn-appeals-section-rio-grande-do-norte-specific-context');
  if (rn_appeals_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-appeals-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_section_what_our_clients_say = document.getElementById('rn-appeals-section-what-our-clients-say');
  if (rn_appeals_section_what_our_clients_say) {
    gsap.fromTo('#rn-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_section_frequently_asked_questions = document.getElementById('rn-appeals-section-frequently-asked-questions');
  if (rn_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#rn-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_section_international_support = document.getElementById('rn-appeals-section-international-support');
  if (rn_appeals_section_international_support) {
    gsap.fromTo('#rn-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_list_our_credentials = document.getElementById('rn-appeals-list-our-credentials');
  if (rn_appeals_list_our_credentials) {
    gsap.from('#rn-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_list_related_services = document.getElementById('rn-appeals-list-related-services');
  if (rn_appeals_list_related_services) {
    gsap.from('#rn-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_section_youre_in_good_hands = document.getElementById('rn-appeals-section-youre-in-good-hands');
  if (rn_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#rn-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_appeals_section_21 = document.getElementById('rn-appeals-section-21');
  if (rn_appeals_section_21) {
    gsap.fromTo('#rn-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('rn-consular-form-consular-services-in-brazil-for-citizens');
  if (rn_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#rn-consular-form-consular-services-in-brazil-for-citizens input, #rn-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_list_quick_facts = document.getElementById('rn-consular-list-quick-facts');
  if (rn_consular_list_quick_facts) {
    gsap.from('#rn-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_list_common_challenges_applicants_face = document.getElementById('rn-consular-list-common-challenges-applicants-face');
  if (rn_consular_list_common_challenges_applicants_face) {
    gsap.from('#rn-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_list_how_we_solve_these_challenges = document.getElementById('rn-consular-list-how-we-solve-these-challenges');
  if (rn_consular_list_how_we_solve_these_challenges) {
    gsap.from('#rn-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_section_service_overview = document.getElementById('rn-consular-section-service-overview');
  if (rn_consular_section_service_overview) {
    gsap.fromTo('#rn-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_form_who_is_this_service_for = document.getElementById('rn-consular-form-who-is-this-service-for');
  if (rn_consular_form_who_is_this_service_for) {
    gsap.from('#rn-consular-form-who-is-this-service-for input, #rn-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_list_required_documents = document.getElementById('rn-consular-list-required-documents');
  if (rn_consular_list_required_documents) {
    gsap.from('#rn-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_list_process = document.getElementById('rn-consular-list-process');
  if (rn_consular_list_process) {
    gsap.from('#rn-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_section_timelines_deadlines = document.getElementById('rn-consular-section-timelines-deadlines');
  if (rn_consular_section_timelines_deadlines) {
    gsap.fromTo('#rn-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_section_fees_costs = document.getElementById('rn-consular-section-fees-costs');
  if (rn_consular_section_fees_costs) {
    gsap.fromTo('#rn-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_list_risks_common_mistakes = document.getElementById('rn-consular-list-risks-common-mistakes');
  if (rn_consular_list_risks_common_mistakes) {
    gsap.from('#rn-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_section_diy_vs_professional_assistance = document.getElementById('rn-consular-section-diy-vs-professional-assistance');
  if (rn_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_section_rio_grande_do_norte_specific_context = document.getElementById('rn-consular-section-rio-grande-do-norte-specific-context');
  if (rn_consular_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-consular-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_section_what_our_clients_say = document.getElementById('rn-consular-section-what-our-clients-say');
  if (rn_consular_section_what_our_clients_say) {
    gsap.fromTo('#rn-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_section_frequently_asked_questions = document.getElementById('rn-consular-section-frequently-asked-questions');
  if (rn_consular_section_frequently_asked_questions) {
    gsap.fromTo('#rn-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_section_international_support = document.getElementById('rn-consular-section-international-support');
  if (rn_consular_section_international_support) {
    gsap.fromTo('#rn-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_list_our_credentials = document.getElementById('rn-consular-list-our-credentials');
  if (rn_consular_list_our_credentials) {
    gsap.from('#rn-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_list_related_services = document.getElementById('rn-consular-list-related-services');
  if (rn_consular_list_related_services) {
    gsap.from('#rn-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_section_youre_in_good_hands = document.getElementById('rn-consular-section-youre-in-good-hands');
  if (rn_consular_section_youre_in_good_hands) {
    gsap.fromTo('#rn-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_consular_section_21 = document.getElementById('rn-consular-section-21');
  if (rn_consular_section_21) {
    gsap.fromTo('#rn-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('rn-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (rn_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#rn-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #rn-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_list_quick_facts = document.getElementById('rn-criminalrecords-list-quick-facts');
  if (rn_criminalrecords_list_quick_facts) {
    gsap.from('#rn-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_list_common_challenges_applicants_face = document.getElementById('rn-criminalrecords-list-common-challenges-applicants-face');
  if (rn_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#rn-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('rn-criminalrecords-list-how-we-solve-these-challenges');
  if (rn_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#rn-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_section_service_overview = document.getElementById('rn-criminalrecords-section-service-overview');
  if (rn_criminalrecords_section_service_overview) {
    gsap.fromTo('#rn-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_form_who_is_this_service_for = document.getElementById('rn-criminalrecords-form-who-is-this-service-for');
  if (rn_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#rn-criminalrecords-form-who-is-this-service-for input, #rn-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_list_required_documents = document.getElementById('rn-criminalrecords-list-required-documents');
  if (rn_criminalrecords_list_required_documents) {
    gsap.from('#rn-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_list_process = document.getElementById('rn-criminalrecords-list-process');
  if (rn_criminalrecords_list_process) {
    gsap.from('#rn-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_section_timelines_deadlines = document.getElementById('rn-criminalrecords-section-timelines-deadlines');
  if (rn_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#rn-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_section_fees_costs = document.getElementById('rn-criminalrecords-section-fees-costs');
  if (rn_criminalrecords_section_fees_costs) {
    gsap.fromTo('#rn-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_list_risks_common_mistakes = document.getElementById('rn-criminalrecords-list-risks-common-mistakes');
  if (rn_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#rn-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('rn-criminalrecords-section-diy-vs-professional-assistance');
  if (rn_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_section_rio_grande_do_norte_specific_context = document.getElementById('rn-criminalrecords-section-rio-grande-do-norte-specific-context');
  if (rn_criminalrecords_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-criminalrecords-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_section_what_our_clients_say = document.getElementById('rn-criminalrecords-section-what-our-clients-say');
  if (rn_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#rn-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_section_frequently_asked_questions = document.getElementById('rn-criminalrecords-section-frequently-asked-questions');
  if (rn_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#rn-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_section_international_support = document.getElementById('rn-criminalrecords-section-international-support');
  if (rn_criminalrecords_section_international_support) {
    gsap.fromTo('#rn-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_list_our_credentials = document.getElementById('rn-criminalrecords-list-our-credentials');
  if (rn_criminalrecords_list_our_credentials) {
    gsap.from('#rn-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_list_related_services = document.getElementById('rn-criminalrecords-list-related-services');
  if (rn_criminalrecords_list_related_services) {
    gsap.from('#rn-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_section_youre_in_good_hands = document.getElementById('rn-criminalrecords-section-youre-in-good-hands');
  if (rn_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#rn-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_criminalrecords_section_21 = document.getElementById('rn-criminalrecords-section-21');
  if (rn_criminalrecords_section_21) {
    gsap.fromTo('#rn-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_form_extradition_assistance_in_brazil = document.getElementById('rn-extradition-form-extradition-assistance-in-brazil');
  if (rn_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#rn-extradition-form-extradition-assistance-in-brazil input, #rn-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_list_quick_facts = document.getElementById('rn-extradition-list-quick-facts');
  if (rn_extradition_list_quick_facts) {
    gsap.from('#rn-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_list_common_challenges_applicants_face = document.getElementById('rn-extradition-list-common-challenges-applicants-face');
  if (rn_extradition_list_common_challenges_applicants_face) {
    gsap.from('#rn-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_list_how_we_solve_these_challenges = document.getElementById('rn-extradition-list-how-we-solve-these-challenges');
  if (rn_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#rn-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_section_service_overview = document.getElementById('rn-extradition-section-service-overview');
  if (rn_extradition_section_service_overview) {
    gsap.fromTo('#rn-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_form_who_is_this_service_for = document.getElementById('rn-extradition-form-who-is-this-service-for');
  if (rn_extradition_form_who_is_this_service_for) {
    gsap.from('#rn-extradition-form-who-is-this-service-for input, #rn-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_list_required_documents = document.getElementById('rn-extradition-list-required-documents');
  if (rn_extradition_list_required_documents) {
    gsap.from('#rn-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_list_process = document.getElementById('rn-extradition-list-process');
  if (rn_extradition_list_process) {
    gsap.from('#rn-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_section_timelines_deadlines = document.getElementById('rn-extradition-section-timelines-deadlines');
  if (rn_extradition_section_timelines_deadlines) {
    gsap.fromTo('#rn-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_section_fees_costs = document.getElementById('rn-extradition-section-fees-costs');
  if (rn_extradition_section_fees_costs) {
    gsap.fromTo('#rn-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_list_risks_common_mistakes = document.getElementById('rn-extradition-list-risks-common-mistakes');
  if (rn_extradition_list_risks_common_mistakes) {
    gsap.from('#rn-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_section_diy_vs_professional_assistance = document.getElementById('rn-extradition-section-diy-vs-professional-assistance');
  if (rn_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_section_rio_grande_do_norte_specific_context = document.getElementById('rn-extradition-section-rio-grande-do-norte-specific-context');
  if (rn_extradition_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-extradition-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_section_what_our_clients_say = document.getElementById('rn-extradition-section-what-our-clients-say');
  if (rn_extradition_section_what_our_clients_say) {
    gsap.fromTo('#rn-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_section_frequently_asked_questions = document.getElementById('rn-extradition-section-frequently-asked-questions');
  if (rn_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#rn-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_section_international_support = document.getElementById('rn-extradition-section-international-support');
  if (rn_extradition_section_international_support) {
    gsap.fromTo('#rn-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_list_our_credentials = document.getElementById('rn-extradition-list-our-credentials');
  if (rn_extradition_list_our_credentials) {
    gsap.from('#rn-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_list_related_services = document.getElementById('rn-extradition-list-related-services');
  if (rn_extradition_list_related_services) {
    gsap.from('#rn-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_section_youre_in_good_hands = document.getElementById('rn-extradition-section-youre-in-good-hands');
  if (rn_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#rn-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_extradition_section_21 = document.getElementById('rn-extradition-section-21');
  if (rn_extradition_section_21) {
    gsap.fromTo('#rn-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_form_discover_the_north_amazon_and_beyond = document.getElementById('rn-north-form-discover-the-north-amazon-and-beyond');
  if (rn_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#rn-north-form-discover-the-north-amazon-and-beyond input, #rn-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_list_quick_facts = document.getElementById('rn-north-list-quick-facts');
  if (rn_north_list_quick_facts) {
    gsap.from('#rn-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_list_common_challenges_applicants_face = document.getElementById('rn-north-list-common-challenges-applicants-face');
  if (rn_north_list_common_challenges_applicants_face) {
    gsap.from('#rn-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_list_how_we_solve_these_challenges = document.getElementById('rn-north-list-how-we-solve-these-challenges');
  if (rn_north_list_how_we_solve_these_challenges) {
    gsap.from('#rn-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_section_trip_overview = document.getElementById('rn-north-section-trip-overview');
  if (rn_north_section_trip_overview) {
    gsap.fromTo('#rn-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_form_who_is_this_trip_for = document.getElementById('rn-north-form-who-is-this-trip-for');
  if (rn_north_form_who_is_this_trip_for) {
    gsap.from('#rn-north-form-who-is-this-trip-for input, #rn-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_list_required_documents = document.getElementById('rn-north-list-required-documents');
  if (rn_north_list_required_documents) {
    gsap.from('#rn-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_list_booking_process = document.getElementById('rn-north-list-booking-process');
  if (rn_north_list_booking_process) {
    gsap.from('#rn-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_section_timelines_deadlines = document.getElementById('rn-north-section-timelines-deadlines');
  if (rn_north_section_timelines_deadlines) {
    gsap.fromTo('#rn-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_section_fees_costs = document.getElementById('rn-north-section-fees-costs');
  if (rn_north_section_fees_costs) {
    gsap.fromTo('#rn-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_list_risks_common_mistakes = document.getElementById('rn-north-list-risks-common-mistakes');
  if (rn_north_list_risks_common_mistakes) {
    gsap.from('#rn-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_section_diy_vs_professional_assistance = document.getElementById('rn-north-section-diy-vs-professional-assistance');
  if (rn_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_section_rio_grande_do_norte_specific_context = document.getElementById('rn-north-section-rio-grande-do-norte-specific-context');
  if (rn_north_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-north-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_section_what_our_clients_say = document.getElementById('rn-north-section-what-our-clients-say');
  if (rn_north_section_what_our_clients_say) {
    gsap.fromTo('#rn-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_section_frequently_asked_questions = document.getElementById('rn-north-section-frequently-asked-questions');
  if (rn_north_section_frequently_asked_questions) {
    gsap.fromTo('#rn-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_section_international_support = document.getElementById('rn-north-section-international-support');
  if (rn_north_section_international_support) {
    gsap.fromTo('#rn-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_list_our_credentials = document.getElementById('rn-north-list-our-credentials');
  if (rn_north_list_our_credentials) {
    gsap.from('#rn-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_list_related_services = document.getElementById('rn-north-list-related-services');
  if (rn_north_list_related_services) {
    gsap.from('#rn-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_section_youre_in_good_hands = document.getElementById('rn-north-section-youre-in-good-hands');
  if (rn_north_section_youre_in_good_hands) {
    gsap.fromTo('#rn-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_north_section_21 = document.getElementById('rn-north-section-21');
  if (rn_north_section_21) {
    gsap.fromTo('#rn-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('rn-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (rn_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#rn-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #rn-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_list_quick_facts = document.getElementById('rn-centralwest-list-quick-facts');
  if (rn_centralwest_list_quick_facts) {
    gsap.from('#rn-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_list_common_challenges_applicants_face = document.getElementById('rn-centralwest-list-common-challenges-applicants-face');
  if (rn_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#rn-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_list_how_we_solve_these_challenges = document.getElementById('rn-centralwest-list-how-we-solve-these-challenges');
  if (rn_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#rn-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_section_trip_overview = document.getElementById('rn-centralwest-section-trip-overview');
  if (rn_centralwest_section_trip_overview) {
    gsap.fromTo('#rn-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_form_who_is_this_trip_for = document.getElementById('rn-centralwest-form-who-is-this-trip-for');
  if (rn_centralwest_form_who_is_this_trip_for) {
    gsap.from('#rn-centralwest-form-who-is-this-trip-for input, #rn-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_list_required_documents = document.getElementById('rn-centralwest-list-required-documents');
  if (rn_centralwest_list_required_documents) {
    gsap.from('#rn-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_list_booking_process = document.getElementById('rn-centralwest-list-booking-process');
  if (rn_centralwest_list_booking_process) {
    gsap.from('#rn-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_section_timelines_deadlines = document.getElementById('rn-centralwest-section-timelines-deadlines');
  if (rn_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#rn-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_section_fees_costs = document.getElementById('rn-centralwest-section-fees-costs');
  if (rn_centralwest_section_fees_costs) {
    gsap.fromTo('#rn-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_list_risks_common_mistakes = document.getElementById('rn-centralwest-list-risks-common-mistakes');
  if (rn_centralwest_list_risks_common_mistakes) {
    gsap.from('#rn-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_section_diy_vs_professional_assistance = document.getElementById('rn-centralwest-section-diy-vs-professional-assistance');
  if (rn_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_section_rio_grande_do_norte_specific_context = document.getElementById('rn-centralwest-section-rio-grande-do-norte-specific-context');
  if (rn_centralwest_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-centralwest-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_section_what_our_clients_say = document.getElementById('rn-centralwest-section-what-our-clients-say');
  if (rn_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#rn-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_section_frequently_asked_questions = document.getElementById('rn-centralwest-section-frequently-asked-questions');
  if (rn_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#rn-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_section_international_support = document.getElementById('rn-centralwest-section-international-support');
  if (rn_centralwest_section_international_support) {
    gsap.fromTo('#rn-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_list_our_credentials = document.getElementById('rn-centralwest-list-our-credentials');
  if (rn_centralwest_list_our_credentials) {
    gsap.from('#rn-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_list_related_services = document.getElementById('rn-centralwest-list-related-services');
  if (rn_centralwest_list_related_services) {
    gsap.from('#rn-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_section_youre_in_good_hands = document.getElementById('rn-centralwest-section-youre-in-good-hands');
  if (rn_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#rn-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_centralwest_section_21 = document.getElementById('rn-centralwest-section-21');
  if (rn_centralwest_section_21) {
    gsap.fromTo('#rn-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('rn-southeast-form-dynamic-southeast-cities-and-history');
  if (rn_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#rn-southeast-form-dynamic-southeast-cities-and-history input, #rn-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_list_quick_facts = document.getElementById('rn-southeast-list-quick-facts');
  if (rn_southeast_list_quick_facts) {
    gsap.from('#rn-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_list_common_challenges_applicants_face = document.getElementById('rn-southeast-list-common-challenges-applicants-face');
  if (rn_southeast_list_common_challenges_applicants_face) {
    gsap.from('#rn-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_list_how_we_solve_these_challenges = document.getElementById('rn-southeast-list-how-we-solve-these-challenges');
  if (rn_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#rn-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_section_trip_overview = document.getElementById('rn-southeast-section-trip-overview');
  if (rn_southeast_section_trip_overview) {
    gsap.fromTo('#rn-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_form_who_is_this_trip_for = document.getElementById('rn-southeast-form-who-is-this-trip-for');
  if (rn_southeast_form_who_is_this_trip_for) {
    gsap.from('#rn-southeast-form-who-is-this-trip-for input, #rn-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_list_required_documents = document.getElementById('rn-southeast-list-required-documents');
  if (rn_southeast_list_required_documents) {
    gsap.from('#rn-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_list_booking_process = document.getElementById('rn-southeast-list-booking-process');
  if (rn_southeast_list_booking_process) {
    gsap.from('#rn-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_section_timelines_deadlines = document.getElementById('rn-southeast-section-timelines-deadlines');
  if (rn_southeast_section_timelines_deadlines) {
    gsap.fromTo('#rn-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_section_fees_costs = document.getElementById('rn-southeast-section-fees-costs');
  if (rn_southeast_section_fees_costs) {
    gsap.fromTo('#rn-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_list_risks_common_mistakes = document.getElementById('rn-southeast-list-risks-common-mistakes');
  if (rn_southeast_list_risks_common_mistakes) {
    gsap.from('#rn-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_section_diy_vs_professional_assistance = document.getElementById('rn-southeast-section-diy-vs-professional-assistance');
  if (rn_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_section_rio_grande_do_norte_specific_context = document.getElementById('rn-southeast-section-rio-grande-do-norte-specific-context');
  if (rn_southeast_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-southeast-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_section_what_our_clients_say = document.getElementById('rn-southeast-section-what-our-clients-say');
  if (rn_southeast_section_what_our_clients_say) {
    gsap.fromTo('#rn-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_section_frequently_asked_questions = document.getElementById('rn-southeast-section-frequently-asked-questions');
  if (rn_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#rn-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_section_international_support = document.getElementById('rn-southeast-section-international-support');
  if (rn_southeast_section_international_support) {
    gsap.fromTo('#rn-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_list_our_credentials = document.getElementById('rn-southeast-list-our-credentials');
  if (rn_southeast_list_our_credentials) {
    gsap.from('#rn-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_list_related_services = document.getElementById('rn-southeast-list-related-services');
  if (rn_southeast_list_related_services) {
    gsap.from('#rn-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_section_youre_in_good_hands = document.getElementById('rn-southeast-section-youre-in-good-hands');
  if (rn_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#rn-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_southeast_section_21 = document.getElementById('rn-southeast-section-21');
  if (rn_southeast_section_21) {
    gsap.fromTo('#rn-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('rn-northeast-form-vibrant-northeast-beaches-and-culture');
  if (rn_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#rn-northeast-form-vibrant-northeast-beaches-and-culture input, #rn-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_list_quick_facts = document.getElementById('rn-northeast-list-quick-facts');
  if (rn_northeast_list_quick_facts) {
    gsap.from('#rn-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_list_common_challenges_applicants_face = document.getElementById('rn-northeast-list-common-challenges-applicants-face');
  if (rn_northeast_list_common_challenges_applicants_face) {
    gsap.from('#rn-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_list_how_we_solve_these_challenges = document.getElementById('rn-northeast-list-how-we-solve-these-challenges');
  if (rn_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#rn-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_section_trip_overview = document.getElementById('rn-northeast-section-trip-overview');
  if (rn_northeast_section_trip_overview) {
    gsap.fromTo('#rn-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_form_who_is_this_trip_for = document.getElementById('rn-northeast-form-who-is-this-trip-for');
  if (rn_northeast_form_who_is_this_trip_for) {
    gsap.from('#rn-northeast-form-who-is-this-trip-for input, #rn-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_list_required_documents = document.getElementById('rn-northeast-list-required-documents');
  if (rn_northeast_list_required_documents) {
    gsap.from('#rn-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_list_booking_process = document.getElementById('rn-northeast-list-booking-process');
  if (rn_northeast_list_booking_process) {
    gsap.from('#rn-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_section_timelines_deadlines = document.getElementById('rn-northeast-section-timelines-deadlines');
  if (rn_northeast_section_timelines_deadlines) {
    gsap.fromTo('#rn-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_section_fees_costs = document.getElementById('rn-northeast-section-fees-costs');
  if (rn_northeast_section_fees_costs) {
    gsap.fromTo('#rn-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_list_risks_common_mistakes = document.getElementById('rn-northeast-list-risks-common-mistakes');
  if (rn_northeast_list_risks_common_mistakes) {
    gsap.from('#rn-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_section_diy_vs_professional_assistance = document.getElementById('rn-northeast-section-diy-vs-professional-assistance');
  if (rn_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_section_rio_grande_do_norte_specific_context = document.getElementById('rn-northeast-section-rio-grande-do-norte-specific-context');
  if (rn_northeast_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-northeast-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_section_what_our_clients_say = document.getElementById('rn-northeast-section-what-our-clients-say');
  if (rn_northeast_section_what_our_clients_say) {
    gsap.fromTo('#rn-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_section_frequently_asked_questions = document.getElementById('rn-northeast-section-frequently-asked-questions');
  if (rn_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#rn-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_section_international_support = document.getElementById('rn-northeast-section-international-support');
  if (rn_northeast_section_international_support) {
    gsap.fromTo('#rn-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_list_our_credentials = document.getElementById('rn-northeast-list-our-credentials');
  if (rn_northeast_list_our_credentials) {
    gsap.from('#rn-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_list_related_services = document.getElementById('rn-northeast-list-related-services');
  if (rn_northeast_list_related_services) {
    gsap.from('#rn-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_section_youre_in_good_hands = document.getElementById('rn-northeast-section-youre-in-good-hands');
  if (rn_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#rn-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_northeast_section_21 = document.getElementById('rn-northeast-section-21');
  if (rn_northeast_section_21) {
    gsap.fromTo('#rn-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_form_charming_south_wine_and_gauchos = document.getElementById('rn-south-form-charming-south-wine-and-gauchos');
  if (rn_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#rn-south-form-charming-south-wine-and-gauchos input, #rn-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_list_quick_facts = document.getElementById('rn-south-list-quick-facts');
  if (rn_south_list_quick_facts) {
    gsap.from('#rn-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_list_common_challenges_applicants_face = document.getElementById('rn-south-list-common-challenges-applicants-face');
  if (rn_south_list_common_challenges_applicants_face) {
    gsap.from('#rn-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_list_how_we_solve_these_challenges = document.getElementById('rn-south-list-how-we-solve-these-challenges');
  if (rn_south_list_how_we_solve_these_challenges) {
    gsap.from('#rn-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_section_trip_overview = document.getElementById('rn-south-section-trip-overview');
  if (rn_south_section_trip_overview) {
    gsap.fromTo('#rn-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_form_who_is_this_trip_for = document.getElementById('rn-south-form-who-is-this-trip-for');
  if (rn_south_form_who_is_this_trip_for) {
    gsap.from('#rn-south-form-who-is-this-trip-for input, #rn-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_list_required_documents = document.getElementById('rn-south-list-required-documents');
  if (rn_south_list_required_documents) {
    gsap.from('#rn-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_list_booking_process = document.getElementById('rn-south-list-booking-process');
  if (rn_south_list_booking_process) {
    gsap.from('#rn-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_section_timelines_deadlines = document.getElementById('rn-south-section-timelines-deadlines');
  if (rn_south_section_timelines_deadlines) {
    gsap.fromTo('#rn-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_section_fees_costs = document.getElementById('rn-south-section-fees-costs');
  if (rn_south_section_fees_costs) {
    gsap.fromTo('#rn-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_list_risks_common_mistakes = document.getElementById('rn-south-list-risks-common-mistakes');
  if (rn_south_list_risks_common_mistakes) {
    gsap.from('#rn-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_section_diy_vs_professional_assistance = document.getElementById('rn-south-section-diy-vs-professional-assistance');
  if (rn_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rn-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_section_rio_grande_do_norte_specific_context = document.getElementById('rn-south-section-rio-grande-do-norte-specific-context');
  if (rn_south_section_rio_grande_do_norte_specific_context) {
    gsap.fromTo('#rn-south-section-rio-grande-do-norte-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_section_what_our_clients_say = document.getElementById('rn-south-section-what-our-clients-say');
  if (rn_south_section_what_our_clients_say) {
    gsap.fromTo('#rn-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_section_frequently_asked_questions = document.getElementById('rn-south-section-frequently-asked-questions');
  if (rn_south_section_frequently_asked_questions) {
    gsap.fromTo('#rn-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_section_international_support = document.getElementById('rn-south-section-international-support');
  if (rn_south_section_international_support) {
    gsap.fromTo('#rn-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_list_our_credentials = document.getElementById('rn-south-list-our-credentials');
  if (rn_south_list_our_credentials) {
    gsap.from('#rn-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_list_related_services = document.getElementById('rn-south-list-related-services');
  if (rn_south_list_related_services) {
    gsap.from('#rn-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_section_youre_in_good_hands = document.getElementById('rn-south-section-youre-in-good-hands');
  if (rn_south_section_youre_in_good_hands) {
    gsap.fromTo('#rn-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const rn_south_section_21 = document.getElementById('rn-south-section-21');
  if (rn_south_section_21) {
    gsap.fromTo('#rn-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
