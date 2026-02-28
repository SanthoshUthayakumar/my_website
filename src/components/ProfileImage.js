import React from "react";
import profile from "../assets/Profile.png";

function ProfileImage() {
  return (
    <div style={styles.wrapper}>
      <img src={profile} alt="Santhosh" style={styles.image} />
    </div>
  );
}

const styles = {
  wrapper: {
  width: "clamp(90px, 18vw, 120px)",
  height: "clamp(90px, 18vw, 120px)",
  borderRadius: "50%",
  overflow: "hidden",
  marginBottom: "20px",
  border: "3px solid green",
  boxShadow: "0 0 15px rgba(255,255,255,0.3)"
},
  image: {
    width: "120%",
    height: "120%",
    objectFit: "cover"
  }
};

export default ProfileImage;