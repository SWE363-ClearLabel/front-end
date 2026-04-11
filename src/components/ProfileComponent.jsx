class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  // Styles kept inside the class as requested
  styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'row', // Align Icon and Text side-by-side
      alignItems: 'center',
      gap: '12px',         // Space between icon and text
      padding: '5px'
    },
    avatarCircle: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#3d3d3d', // Dark circle background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1.5px solid #efebc1', // The Golden Border
    },
    icon: {
      fontSize: '20px',
      color: '#efebc1'
    },
    textStack: {
      display: 'flex',
      flexDirection: 'column' // Stack Name over Role
    },
    username: {
      color: '#8f8c6bff',
      fontSize: '16px',
      fontWeight: 'bold',
      lineHeight: '1.2'
    },
    role: {
      color: '#c6c796ff',
      fontSize: '9px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    }
  };

  render() {
    const { username, role, isLoggedIn } = this.props;

    return (
      <div style={this.styles.wrapper}>
        {/* --- THE ICON SECTION --- */}
        <div style={this.styles.avatarCircle}>
          <span style={this.styles.icon}>👤</span>
        </div>

        {/* --- THE TEXT SECTION --- */}
        <div style={this.styles.textStack}>
          <span style={this.styles.username}>
            {isLoggedIn ? username : "GUEST"}
          </span>
          <span style={this.styles.role}>
            {role}
          </span>
        </div>
      </div>
    );
  }
}

export default ProfileComponent;