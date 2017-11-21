require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let imageDates = require('../data/imageDates.json');

//获取imageDates.json 的图片信息并且存储在imageDates 数组中；
function getImageURL(imageDataArr){
    for(var i =0,j =imageDataArr.length;i<j;i++){
        var singleImageData = imageDataArr[i];
        singleImageData.imageURL = require('../images/'+singleImageData.fileName);

        imageDataArr[i] = singleImageData;
    }
    return imageDataArr;
}

imageDates = getImageURL(imageDates);

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        {/*<img src={yeomanImage} alt="Yeoman Generator" />*/}
        <section className="stage">
          <section className="img-sec">

          </section>
          <nav className="controller-nav">

          </nav>
        </section>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
