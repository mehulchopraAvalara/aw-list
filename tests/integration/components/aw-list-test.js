import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('aw-list', 'Integration | Component | aw list', {
  integration: true
});

test('it renders items', function(assert) {
  this.set('items', [
    'Go to Gym',
    'Go to office',
    'Code Ember',
    'Go to Sleep',
  ])
  this.render(hbs`{{aw-list
    items=items
  }}`)

  assert.ok(this.$('ul').length, 'ul rendered');
  assert.ok(this.$('li').length, 'li rendered');
});
