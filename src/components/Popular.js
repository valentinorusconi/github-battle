import React from 'react';
import PropTypes from 'proptypes';

function SelectedLanguage (props){
    var languages = [
      'All',
      'Java',
      'PHP',
      'JavaScript',
      'Ruby',
      'CSS',
      'Python'
    ];
    return(
     <ul className="languages">
      {languages.map((lang) => {
        return (
          <li
            style={lang === props.selectedLanguage ? {color:'#d0021b'}:null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
                {lang}
          </li>
        );
    })}
    </ul>
)}

SelectedLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        selectedLanguage: 'All'
      };
      this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang){
    this.setState(function(){
      return {
        selectedLanguage: lang
      }
    })
  };
  render(){
  return (
   <div>
    <SelectedLanguage 
      selectedLanguage={this.state.selectedLanguage}
      onSelect={this.updateLanguage}  
    />
   </div>
  );
  }
};

export default Popular;
