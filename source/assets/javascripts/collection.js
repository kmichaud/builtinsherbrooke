(function($, window, document) {
  'use strict';

  var Collection, // global object
    cache, // store references to DOM
    c, // alias to cache
    state; // store any references to state

  Collection = {
    Utilities: {}, // store any helper functions
    View: {}, // store any view functions
  };

  Collection.cache = c = cache = {
    $tab: $('.js-tabs'),
    $mobileTab: $('.js-mobile-tabs'),
    $entryList: $('.js-entry-list'),
    $all: $('.js-entry'),
    $companies: null,
    $agencies: null,
    $resources: null,
    $events: null,
  };

  Collection.state = state = {
    filter: 'all',
  };

  // ==========================================================================
  // * Collection Functions
  // ==========================================================================

  Collection.updateFilterState = function(newFilter) {
    state.filter = newFilter;
  };

  Collection.callFilter = function(filter) {
    Collection.View.setActiveTabs(filter);
    Collection.View.filterEntries(filter);
    Collection.updateFilterState(filter);
  };

  // ==========================================================================
  // * Collection View Functions
  // ==========================================================================

  Collection.View.setActiveTabs = function(newFilter) {
    Collection.View._switchMobileTab(newFilter);
    Collection.View._switchTab(newFilter);
  };

  Collection.View.filterEntries = function(newFilter) {
    cache['$' + state.filter].hide();
    cache['$' + newFilter].show();
  };

  Collection.View._switchTab = function(newFilter) {
    var $newTab, // tab to make .active
        $oldTab; // currently active tab; remove .active

    $newTab = Collection.Utilities.findTabByFilter(newFilter);
    $oldTab = Collection.Utilities.findTabByFilter(state.filter);

    if ($newTab.data('sort') != $oldTab.data('sort')) {
      $newTab.parent().addClass('active');
      $oldTab.parent().removeClass('active');
    }
  };

  Collection.View._switchMobileTab = function(newFilter) {
    var $newMobileTab, // mobile tab to make selected
        $oldMobileTab; // currently selected mobile tab; remove selected

    $newMobileTab = Collection.Utilities.findMobileTabByFilter(newFilter);
    $newMobileTab.attr('selected', true);
    $oldMobileTab = Collection.Utilities.findMobileTabByFilter(state.filter);
    $oldMobileTab.attr('selected', false);
  };

  // ==========================================================================
  // * Collection Utilities
  // ==========================================================================

  Collection.Utilities.findMobileTabByFilter = function(filterName) {
    return c.$mobileTab.find('[data-sort=' + filterName + ']');
  };

  Collection.Utilities.findTabByFilter = function(filterName) {
    return c.$tab.find('[data-sort=' + filterName + ']');
  };

  // on load
  $(function() {
    // cache references to each category
    cache.$companies = c.$all.filter('[data-category=company]');
    cache.$agencies = c.$all.filter('[data-category=agency]');
    cache.$resources = c.$all.filter('[data-category=resource]');
    cache.$events = c.$all.filter('[data-category=event]');

    // initialize listener for desktop tabs
    c.$tab.on('click', 'a', function(event) {
      event.preventDefault();

      var filter = $(event.target).data('sort');
      Collection.callFilter(filter);

      return false;
    });

    // initialize listener for mobile tabs (select input)
    c.$mobileTab.on('change', function(event) {
      event.preventDefault();

      var filter = $(event.target.selectedOptions[0]).data('sort');
      Collection.callFilter(filter);

      return false;
    });
  });
}(window.jQuery, window, document));
