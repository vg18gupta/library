// import React from "react";
// import { Col, Row } from "../Grid";

// export function BookList({ children }) {
//   return (
//     <ul className="list-group">{children}</ul>
//   );
// };

// export function BookListItem({
//   googleId,
//   title,
//   authors,
//   description,
//   thumbnail,
//   href,
//   date,
//   clickEvent,
//   saved,
//   screenWidth
// }) {
//   console.log(saved);
//   return (
//     <li className="list-group-item m-2">

//       {screenWidth >= 768 &&
//         <div className="float-right">
//           {!saved ? (
//             <button
//               className="btn btn-success"
//               onClick={event => clickEvent(event, googleId, title, authors, description, href, thumbnail)}>Save</button>
//           ) : (
//               <button className="btn btn-danger" onClick={event => clickEvent(event, googleId)}>Unsave</button>
//             )
//           }
//           <a className="btn btn-primary ml-2 mr-2" href={href} target="_blank" rel="noopener noreferrer">View</a>
//         </div>
//       }

//       <h4 className="font-weight-bold">{title}</h4>
//       <h5>by {authors.length > 1 ? (authors.reduce((prev, curr) => [prev, ", ", curr])) : authors[0]}</h5>
//       <Row>
//         <div className="col-sm-12 col-md-auto text-center">
//           <img src={thumbnail} alt={title} className="mt-1 mb-2" />
//         </div>
//         <Col>
//           <p className={screenWidth < 768 ? "text-justify" : ""}>{description}</p>
//         </Col>
//       </Row>

//       {screenWidth < 768 &&
//         <div className="row">
//           <Col>
//           {!saved ? (
//             <button
//               className="btn btn-success btn-block"
//               onClick={event => clickEvent(event, googleId, title, authors, description, href, thumbnail)}>Save</button>
//           ) : (
//               <button className="btn btn-danger btn-block" onClick={event => clickEvent(event, googleId)}>Unsave</button>
//             )
//           }
//           </Col>
//           <Col>
//             <a className="btn btn-primary btn-block" href={href} target="_blank" rel="noopener noreferrer">View</a>
//           </Col>
//         </div>
//       }
//       {saved &&
//         <div className="row">
//           <Col>
//             <small className="text-right">Saved on {date}</small>
//           </Col>
//         </div>
//       }

//     </li>
//   );
// };

import React from "react";
import { Col, Row } from "../Grid";

export function BookList({ children }) {
  return (
    <ul className="list-group">{children}</ul>
  );
};

export function BookListItem({
  googleId,
  title,
  authors,
  description,
  thumbnail,
  href,
  date,
  clickEvent,
  saved,
  screenWidth
}) {
  console.log(saved);
  return (
    <div className="card text-center">
    <div className="overflow">
        <img src={thumbnail} alt={title} style={{width:"100%"}} className="card-img-top"/>
    </div>
    <div className="card-body text-dark">
      <h4 className="card-title">{title}</h4>
      <h5>by {authors.length > 1 ? (authors.reduce((prev, curr) => [prev, ", ", curr])) : authors[0]}</h5>
      <p className="card-text text-secondary">{description}</p>
        {/* <a href="#" className="btn btn-outline-success">Read More</a> */}
        <div className="float-right">
          {!saved ? (
            <button
              className="btn btn-outline-success"
              onClick={event => clickEvent(event, googleId, title, authors, description, href, thumbnail)}>Save</button>
          ) : (
              <button className="btn btn-danger" onClick={event => clickEvent(event, googleId)}>Unsave</button>
            )
          }
          <a className="btn btn-primary ml-2 mr-2" href={href} target="_blank" rel="noopener noreferrer">View</a>
        </div>
    </div>
    {saved &&
        <div className="row">
          <Col>
            <small className="text-right">Saved on {date}</small>
          </Col>
        </div>
      }
    </div>
  );
};
