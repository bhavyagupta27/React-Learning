export function Profile() {
  const name = "Bhavya Gupta";
  const bio = "CSE Student | Tech Enthusiast";

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", textAlign: "center", maxWidth: "300px", margin: "20px auto", fontFamily: "sans-serif" }}>
      <img 
        src="https://ui-avatars.com/api/?name=Bhavya+Gupta&background=0D8ABC&color=fff&size=128" 
        alt="Profile Picture" 
        style={{ borderRadius: "50%", marginBottom: "10px" }}
      />
      <h2 style={{color:"blue"}}>{name}</h2>
      <p style={{ color: "green" }}>{bio}</p>
      <button style={{ padding: "8px 16px", cursor: "pointer", backgroundColor: "#0D8ABC", color: "white", border: "none", borderRadius: "5px", marginTop: "10px" }}>
        Connect
      </button>
    </div>
  );
}