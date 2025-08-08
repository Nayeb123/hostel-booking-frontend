import React from 'react';

const AuthModal = ({ show, activeTab, onTabSwitch, onLogin, onRegister, onClose }) => {
  if (!show) return null;

  return (
    <div className="login-modal" style={{display:'flex',position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(0,0,0,0.5)',zIndex:1000,alignItems:'center',justifyContent:'center'}}>
      <div className="login-modal-content">
        <div style={{display:'flex',justifyContent:'center',marginBottom:'2rem'}}>
          <button
            className={`btn tab-btn${activeTab==='login' ? ' active' : ''}`}
            type="button"
            style={{flex:1,marginRight:'0.5rem',borderRadius:'8px 0 0 8px'}}
            onClick={() => onTabSwitch('login')}
          >Login</button>
          <button
            className={`btn tab-btn${activeTab==='register' ? ' active' : ''}`}
            type="button"
            style={{flex:1,borderRadius:'0 8px 8px 0'}}
            onClick={() => onTabSwitch('register')}
          >Register</button>
        </div>
        <form
          id="loginForm"
          style={{marginBottom:'1.5rem',display:activeTab==='login'?'block':'none',transition:'all 0.3s'}}
          onSubmit={onLogin}
        >
          <h2 style={{marginBottom:'1.5rem',color:'#2d3748',fontWeight:600}}>Login to Your Account</h2>
          <input type="text" id="login-username" placeholder="Username or Email" style={{width:'92%',marginBottom:'1rem',padding:'0.75rem',borderRadius:'6px',border:'1px solid #e2e8f0',fontSize:'1rem'}} required />
          <input type="text" id="login-studentid" placeholder="Student ID" style={{width:'92%',marginBottom:'1rem',padding:'0.75rem',borderRadius:'6px',border:'1px solid #e2e8f0',fontSize:'1rem'}} required />
          <input type="password" id="login-password" placeholder="Password" style={{width:'92%',marginBottom:'1rem',padding:'0.75rem',borderRadius:'6px',border:'1px solid #e2e8f0',fontSize:'1rem'}} required />
          <button className="btn" type="submit" style={{width:'92%',marginBottom:'0.5rem',background:'#2563eb',color:'#fff',fontWeight:500,fontSize:'1rem'}}>Login</button>
        </form>
        <form
          id="registerForm"
          style={{marginBottom:'1.5rem',display:activeTab==='register'?'block':'none',transition:'all 0.3s'}}
          onSubmit={onRegister}
        >
          <h2 style={{marginBottom:'1.5rem',color:'#2d3748',fontWeight:600}}>Create a New Account</h2>
          <input type="text" id="register-username" placeholder="Username" style={{width:'92%',marginBottom:'1rem',padding:'0.75rem',borderRadius:'6px',border:'1px solid #e2e8f0',fontSize:'1rem'}} required />
          <input type="text" id="register-studentid" placeholder="Student ID" style={{width:'92%',marginBottom:'1rem',padding:'0.75rem',borderRadius:'6px',border:'1px solid #e2e8f0',fontSize:'1rem'}} required />
          <input type="email" id="register-email" placeholder="Email" style={{width:'92%',marginBottom:'1rem',padding:'0.75rem',borderRadius:'6px',border:'1px solid #e2e8f0',fontSize:'1rem'}} required />
          <input type="password" id="register-password" placeholder="Password" style={{width:'92%',marginBottom:'1rem',padding:'0.75rem',borderRadius:'6px',border:'1px solid #e2e8f0',fontSize:'1rem'}} required />
          <button className="btn" type="submit" style={{width:'92%',background:'#059669',color:'#fff',fontWeight:500,fontSize:'1rem'}}>Register</button>
        </form>
        <button className="btn" style={{background:'#f3f4f6',color:'#333',marginTop:'1rem',borderRadius:'8px'}} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AuthModal;
