import React from 'react'

const NewsItem= (props) => {
  
    let {title,description,imgurl,newsurl,author,date,source}=props;
    return (
      
      <div className="card-group my-3"> 
        <div  className="card " style={{border:"solid 3px black"}}>
  <img src={!imgurl?"https://assets.thehansindia.com/h-upload/2020/05/14/969258-liveupdates.webp ":imgurl}  className="card-img-top" alt="news"/>
  <div  className="card-body text-center">
    <h5  className="card-title"style={{color:"rgb(2 0 90)",fontWeight:"700"}}>{title}...<span className="position-absolute top-0 translate-middle badge rounded-pill bg-warning text-dark" style={{left:"50%",zIndex:"1",border:"solid 2px black"}}> {source}
      <span className="visually-hidden">unread messages</span>
    </span> </h5>
    <p  className="card-text" style={{color:"black",fontWeight:"500"}}>{description}..</p>
    <p className="card-text"  style={{color:"rgb(8 5 177)",fontWeight:"450"}}><small className="text">By {!author?"Unknown":author} on {new Date(date).toUTCString()} </small></p>
    <a href={newsurl} target='_blank' rel="noreferrer" className=" btn btn-dark ">Know More</a>
  </div>
</div>
      </div>
    
    )
  
}

export default NewsItem
