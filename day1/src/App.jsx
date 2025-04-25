// import Navbar from "./Navbar";
// import Cricket from "./Cricket";
// import Football from "./Football";
// import Batminition from "./Badminton";
// import Chess from "./Chess";
// import "./App.css";
// import { NTR } from "./NTR";
// import ALLUARJUN from "./ALLUARJUN";
// function App() {
//   return (
//     <div>

//     <Navbar></Navbar>
//     <div id="sports">
//     <Cricket></Cricket>
//     <Football></Football>
//     <Badminton></Badminton>
//     <Chess></Chess>
//    </div>
//    <NTR></NTR>
//    <ALLUARGUN></ALLUARGUN>
//    </div>
//   );
// }

// // export default App;


// import React from "react";
// import "./App.css";

// const techData = {
//   frontend: [
//     {
//       name: "HTML",
//       desc: "HTML stands for HyperText Markup Language. It's the basic code used to create and structure web pages.",
//       img: "./html.png"
//     },
//     {
//       name: "CSS",
//       desc: "It’s used to make websites look nice — like adding colors, fonts, spacing, borders, and layout.",
//       img: "./css.webp"
//     },
//     {
//       name: "JavaScript",
//       desc: "JavaScript is a programming language that makes websites interactive and dynamic.",
//       img: "./javascript.png"
//     },
//     {
//       name: "React.js",
//       desc: "React is a JavaScript library used to build user interfaces, especially for websites and apps.",
//       img: "./bootstrap.jpg"
//     }
//   ],
//   backend: [
//     {
//       name: "Node.js",
//       desc: "Node.js is a way to run JavaScript outside the browser, usually on a server.",
//       img: "https://nodejs.org/static/images/logo.svg"
//     },
//     {
//       name: "Python",
//       desc: "Python is a programming language that’s:Simple to read,Easy to write ,Very powerful for building all kinds of things!",
//       img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
//     },
//     {
//       name: "Java",
//       desc: "Java is a programming language used to build:Apps,Websites,Games,Big systems for banks, companies, and more.",
//       img: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
//     },
//     {
//       name: "C Language",
//       desc: "C is one of the oldest and most powerful programming language.",
//       img: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
//     }
//   ],
//   database: [
//     {
//       name: "Mongo DB",
//       desc: "MongoDB is a database — a place where you store information for your website or app.",
//       img: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png"
//     },
//     {
//       name: "SQL",
//       desc: "It’s used to talk to databases — to store, find, update, or delete data.",
//       img: "https://cdn-icons-png.flaticon.com/512/4492/4492311.png"
//     },
//     {
//       name: "Oracle database",
//       desc: "Oracle Database is a powerful and popular database system used to store and manage large amounts of data for companies, websites, and apps.",
//       img: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
//     },
//     {
//       name: "Azure database",
//       desc: "What can you do with Azure Database:Store data,Scale,Secure,Manage",
//       img: "https://cdn-icons-png.flaticon.com/512/873/873107.png"
//     }
//   ]
// };

// function App() {
//   return (
//     <div className="App">
//       <nav className="navbar">
//         <h2>Software Architecture</h2>
//         <div className="menu">
//           <button>Home</button>
//           <button>About</button>
//           <button>Contact</button>
//         </div>
//         <div className="auth">
//           <button className="login">Login</button>
//           <button className="signup">SignUp</button>
//         </div>
//       </nav>

//       {["frontend", "backend", "database"].map((section) => (
//         <section key={section}>
//           <h1 className="section-title">{section.charAt(0).toUpperCase() + section.slice(1)}</h1>
//           <div className="card-grid">
//             {techData[section].map((tech, index) => (
//               <div className="card" key={index}>
//                 <img src={tech.img} alt={tech.name} className="card-img" />
//                 <h3>{tech.name}</h3>
//                 <p>{tech.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// }

// export default App;


import React from "react";
import "./App.css";

const techData = {
  frontend: [
    {
      name: "HTML",
      desc: "HTML stands for HyperText Markup Language. It's the basic code used to create and structure web pages.",
      img: "./html.png"
    },
    {
      name: "CSS",
      desc: "CSS is used to make websites look nice — like adding colors, fonts, spacing, borders, and layout.",
      img: "./css.webp"
    },
    {
      name: "JavaScript",
      desc: "JavaScript is a programming language that makes websites interactive and dynamic.",
      img: "./javascript.png"
    },
    {
      name: "React.js",
      desc: "React is a JavaScript library used to build user interfaces, especially for websites and apps.",
      img: "./react.png"
    }
  ],
  backend: [
    {
      name: "Node.js",
      desc: "Node.js is a way to run JavaScript outside the browser, usually on a server.",
      img: "./nodejs.jpg"
    },
    {
      name: "Python",
      desc: "Python is a programming language that's simple to read, easy to write, and very powerful for building all kinds of things.",
      img: "./python.avif"
    },
    {
      name: "Java",
      desc: "Java is a programming language used to build apps, websites, games, and big systems for banks, companies, and more.",
      img: "./java.webp"
    },
    {
      name: "C Language",
      desc: "C is one of the oldest and most powerful programming languages.",
      img: "./c.webp"
    }
  ],
  database: [
    {
      name: "MongoDB",
      desc: "MongoDB is a database — a place where you store information for your website or app.",
      img: "./mango db.webp"
    },
    {
      name: "SQL",
      desc: "SQL is used to talk to databases — to store, find, update, or delete data.",
      img: "./SQL.webp"
    },
    {
      name: "Oracle Database",
      desc: "Oracle Database is a powerful and popular database system used to store and manage large amounts of data for companies, websites, and apps.",
      img: "./oracle-Database.png"
    },
    {
      name: "Azure Database",
      desc: "Azure Database is a cloud service by Microsoft used to store, scale, secure, and manage data online.",
      img: "./azure database.jpg"
    }
  ]
};

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h2>Technology Landscape</h2>
        <div className="menu">
          <button>Home</button>
          <button>About</button>
          <button>Contact</button>
        </div>
        <div className="auth">
          <button className="login">Login</button>
          <button className="signup">SignUp</button>
        </div>
      </nav>

      {["frontend", "backend", "database"].map((section) => (
        <section key={section}>
          <h1 className="section-title">
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </h1>
          <div className="card-grid">
            {techData[section].map((tech, index) => (
              <div className="card" key={index}>
                <img src={tech.img} alt={tech.name} className="card-img" />
                <h3>{tech.name}</h3>
                <p>{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default App;
