import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
import SECTION_DATA from '../../dammy/section_data';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      SECTION_DATA,
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {/* propsの内容が多い場合は以下のようにスプレッドを使うと良い */}
        {this.state.SECTION_DATA.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
