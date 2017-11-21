require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let imageDatas = require('../data/imgData');

// console.log(imageDatas)
//获取imageDates.json 的图片信息并且存储在imageDates 数组中；
function getImageURL(imageDataArr){
    for(var i =0,j =imageDataArr.length;i<j;i++){
        var singleImageData = imageDataArr[i];
        singleImageData.imageURL = require('../images/'+singleImageData.fileName);

        imageDataArr[i] = singleImageData;
    }
    return imageDataArr;
}

imageDatas = getImageURL(imageDatas);




//图片组件

class ImgFigure  extends React.Component{
  render(){
    return (
      <figure className="img-figure">
        <img src={this.props.data.imageURL} alt={this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">
            {this.props.data.title}
          </h2>
        </figcaption>
      </figure>
      )
  }
}



class AppComponent extends React.Component {

constructor(){
  super();
    this.state = {
      link:""
    }
}



//组件加载后为每张图的位置
  componentDidMount(){


  }


  render() {
  const controllerunits = [],
  imgFigures = [];

  imageDatas.forEach(function(value,index){
    console.log("1")
    imgFigures.push(<ImgFigure data={value} key={value.fileName} ref={`imageFigure`}/>)
  })

    return (
      <div className="index">
        <div className="showPic">

        </div>
        {/*<img src={yeomanImage} alt="Yeoman Generator" />*/}
        <section className="stage" ref="stage">
          <section className="img-sec" >
            {imgFigures}
          </section>
          <nav className="controller-nav">
            {controllerunits}
          </nav>
        </section>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
