import React from "react";

const Sidebar = () => {
  return (
    <div className="side">
      <h2>About Me</h2>
      <h5>Photo of me:</h5>
      <div className="images">
        <img src="https://picsum.photos/300/200" width="auto" alt="" />
      </div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <h3>More Text</h3>
      <p>Lorem ipsum dolor sit ame.</p>
      <div className="images">
        <img src="https://picsum.photos/301/60" width="auto" alt="" />
      </div>
      <br />
      <div className="images">
        <img src="https://picsum.photos/302/60" width="auto" alt="" />
      </div>
      <br />
      <div className="images">
        <img src="https://picsum.photos/303/60" width="auto" alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
