
import React from 'react';
import DatePicker from 'material-ui/DatePicker';

var GlobalFilters = React.createClass({

  getInitialState: function() {
    return {
      filterText: '',
    };
  },

  render: function() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
        />
      <MarketsList
          markets={this.props.data}
          filterText={this.state.filterText}
        />
      </div>
    );
  }

});

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SearchBar';
    }
    render() {
        return (
        <div>
          //LOGO
          <svg width="180px" height="47px" viewBox="106 203 180 47" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs></defs>
              <text id="foodtrucker" stroke="none" fill="#666666" fill-rule="evenodd" font-family="SignPainter-HouseScript, SignPainter" font-size="48" font-weight="normal">
                  <tspan x="111" y="237">foodtrucker</tspan>
              </text>
          </svg>
          //Searchbar
          <h1>SearchBar</h1>;
            //Search terms Input Box
            <form>
            <input type="text" placeholder=" Mexican, Vegan, Lobster ..."></input> />
            </form>
            //Time Selection Radio Buttons
            //<form action="">
            //  <input type="radio" name="when" value="Today"> Male<br>
            //  <input type="radio" name="when" value="Tomorrow"> Female<br>
            //  <input type="radio" name="when" value="Weekend"> Other
            //</form>
            //Calendar
            <input type="date" />
            //OR --> <DatePicker hintText="Portrait Inline Dialog" container="inline" />

          //LOGO
            <svg width="180px" height="47px" viewBox="106 203 180 47" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <text id="foodtrucker" stroke="none" fill="#666666" fill-rule="evenodd" font-family="SignPainter-HouseScript, SignPainter" font-size="48" font-weight="normal">
                    <tspan x="111" y="237">foodtrucker</tspan>
                </text>
            </svg>

            //Sidebar Import
          <Sidebar />
        </div>
      );
    }
}



export default SearchBar;
