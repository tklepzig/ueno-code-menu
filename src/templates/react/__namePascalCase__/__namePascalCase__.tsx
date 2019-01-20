import React, { <%= componentType %> } from 'react';
<% if (stylesExtension) { %>import s from './<%= namePascalCase %>.<%= stylesExtension %>';
<% } %>

export interface <%= namePascalCase %>Props {

}

export class <%= namePascalCase %> extends React.<%= componentType %><<%= namePascalCase %>Props> {
  render() {
    return (
      <div className={s.<%= namePascalCase %>}>
        {this.props.children}
      </div>
    );
  }
}
