import React from 'react' ;
import ReactDOM from 'react-dom' ;
import {Card} from 'reactbulma' ;
import { CardImage } from 'reactbulma' ;
import { CardContent } from 'reactbulma' ;
import { Content } from 'reactbulma' ;
import recipeData from './recipes.json';
import { Button } from 'reactbulma';
import { Level } from 'reactbulma';
import { LevelLeft } from 'reactbulma';
import { LevelRight } from 'reactbulma';
import { LevelItem } from 'reactbulma';

class Recipes extends React.Component {
    render() {
        var link = 'recipe.html?dish=' + this.props.recipeName;
        return (
        <Card className="card">
            <div className="individ_card">
            <Card.Image src={this.props.recipeImage}/>
            <div className="middle">
                <a className="view-butt" href={link}>Full Recipe</a>
              </div>
              <div className="card-overlay"></div>
            </div>
            <Card.Content>
                <Content>
                  <p className="title is-4">{this.props.recipeName}</p>
                </Content>
            </Card.Content>
        </Card> 
        );
    }
}


class Test extends React.Component{
    render() {
        var cardNames=[];
        var columns=[];
        for (var i = 0; i < recipeData.length; i++) {
                cardNames.push(<Recipes recipeName={(recipeData[i].recipe)} recipeDate={(recipeData[i].date)} recipeImage={recipeData[i].card_image}/>)
                if(i != 0 && i % 3 == 2 || i == recipeData.length - 1) {
                    columns.push(<div className="columns">{cardNames}</div>)
                    cardNames = []
                }
            }
     
        return(
            <div> {columns} </div>
        );   
    }
}



/*const RECIPES = 1;
const RECIPE = 2;

class Page extends React.Component {
    getInitialState() {
        return {page: RECIPES};
    }
    
    componentDidMount() {
        if (window.location.includes('recipes.html')) {
            this.setState({page: RECIPES});
        } else {
            this.setState({page: RECIPE});
        }
    }
    
    render() {
        var page = (<div></div>);
        if (this.state) {
            switch (this.state.page) {
                case RECIPES: page = (<Test/>); break;
                case RECIPE: page = (<RecipePage/>); break;
            }
        }
        return (
            {page}
        );
    }
}*/

ReactDOM.render(
    <Test/>,
    document.getElementById('root')
);
    
    
