import Component from '@glimmer/component';

export default class NavigationComponent extends Component {
  links = [
    { name: 'Create', route: 'create-new-post' },
    { name: 'Inspiration', route: 'create-new-post' },
    { name: 'Okurka', route: 'create-new-post' },
    { name: 'Tatranka', route: 'create-new-post' },
    { name: 'Šlupka', route: 'create-new-post' },
  ];
}
