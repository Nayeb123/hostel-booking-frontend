import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import AuthModal from './components/AuthModal';
import PaymentModal from './components/PaymentModal';
import RoomDetailsModal from './components/RoomDetailsModal';
import BookingHistory from './components/BookingHistory';
import About from './components/About';
import Facilities from './components/Facilities';
import Rooms from './components/Rooms';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './style.css';

function App() {
  // Authentication and user state
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authTab, setAuthTab] = useState('login');
  const [showProfile, setShowProfile] = useState(false);

  // Room listing state
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showRoomDetails, setShowRoomDetails] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Room filters
  const [roomType, setRoomType] = useState('');
  const [roomFloor, setRoomFloor] = useState('');
  const [roomPrice, setRoomPrice] = useState('');
  const [roomAvailability, setRoomAvailability] = useState('');
  const [roomSearch, setRoomSearch] = useState('');

  // Booking and payment state
  const [bookingHistory, setBookingHistory] = useState([
    { room: '2 in 1 Room', year: '2024/2025', status: 'Confirmed', price: 10000 },
    { room: '3 in 1 Room', year: '2023/2024', status: 'Completed', price: 8500 }
  ]);
  const [showHistory, setShowHistory] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [roomForPayment, setRoomForPayment] = useState(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [bookingStatus, setBookingStatus] = useState({ status: '', message: '' });

  // UI state for modals and information
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [moreInfoType, setMoreInfoType] = useState('');

  // Fetch rooms data on component mount
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        // TODO: Integrate with backend API
        // Expected endpoint: GET /api/rooms
        // const response = await fetch('/api/rooms');
        // const data = await response.json();
        // if (!response.ok) throw new Error(data.message);
        
        // Mock data for now
        const mockRooms = [
          {
            name: '1 in 1 Room',
      type: '1in1',
      floor: 'first',
      price: 15000,
      availability: 'available',
      img: '/assets/opal_single.jpg',
      images: [
        '/assets/opal_single.jpg',
        'src/assets/Washroom.jpg',
        'src/assets/room 1.jpg',
        'src/assets/room 3.jpg'
      ],
      desc: 'Private room for one student. Maximum comfort and privacy for focused study.',
      totalBedspaces: 1,
      availableBedspaces: 1
    },
    {
      name: '2 in 1 Room',
      type: '2in1',
      floor: 'second',
      price: 10000,
      availability: 'available',
      img: '/assets/2 in 1.jpeg',
      images: [
        '/assets/2 in 1.jpeg',
        'src/assets/wash1.JPEG',
        'src/assets/room 3.jpg',
        'src/assets/balcony.JPEG'
      ],
      desc: 'Shared room for two students. Great for collaboration and making friends.',
      totalBedspaces: 2,
      availableBedspaces: 1
    },
    {
      name: '3 in 1 Room',
      type: '3in1',
      floor: 'third',
      price: 8500,
      availability: 'available',
      img: '/assets/3 in 1.jpeg',
      images: [
        'src/assets/room3.JPG',
        'src/assets/wash2.JPG',
        'src/assets/balcony.JPEG',
        'src/assets/room2.JPG'
      ],
      desc: 'Shared room for three students. Balanced privacy and affordability.',
      totalBedspaces: 3,
      availableBedspaces: 2
    },
    {
      name: '4 in 1 Room',
      type: '4in1',
      floor: 'fourth',
      price: 6500,
      availability: 'available',
      img: '/assets/4 in 1.jpg',
      images: [
        'src/assets/room44.JPG',
        'src/assets/Washroom.jpg',
        'src/assets/room4.JPG',
        'src/assets/balcony.JPEG'
      ],
      desc: 'Shared room for four students. Most affordable option for a vibrant student life.',
      totalBedspaces: 4,
      availableBedspaces: 3
    }
        ];
        setRooms(mockRooms);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  // Filtering logic
  const filteredRooms = rooms.filter(room => {
    return (
      (!roomType || room.type === roomType) &&
      (!roomFloor || room.floor === roomFloor) &&
      (!roomPrice || room.price >= parseInt(roomPrice)) &&
      (!roomAvailability || (roomAvailability === 'available' ? room.availableBedspaces > 0 : room.availableBedspaces === 0)) &&
      (!roomSearch || room.name.toLowerCase().includes(roomSearch.toLowerCase()))
    );
  });

  // Filter handlers
  const handleFilter = (e) => {
    e.preventDefault();
    // No-op, filters are live
  };

  // Smooth scroll for nav links
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Open auth modal (for Book Now, Book Your Room, Login/Register)
  const openAuthModal = (tab = 'login') => {
    setAuthTab(tab);
    setShowAuthModal(true);
  };

  // Close auth modal
  const closeAuthModal = () => setShowAuthModal(false);

  // Switch between login/register tabs in auth modal
  const handleAuthTabSwitch = (tab) => setAuthTab(tab);

  // Login/Register handlers
  const handleLogin = async (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const studentId = document.getElementById('login-studentid').value;
    
    try {
      // TODO: Integrate with backend API
      // Expected endpoint: POST /api/auth/login
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ username, studentId })
      // });
      // const userData = await response.json();
      // if (!response.ok) throw new Error(userData.message);
      
      // Mock response for now
      const userData = {
        username,
        studentId,
        email: `${username}@example.com`,
        joinedDate: '2025-08-04',
        bookings: bookingHistory
      };

      setUser(userData);
      closeModal();
    } catch (err) {
      alert('Login failed: ' + err.message);
    }
  };
  
  const handleRegister = (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const studentId = document.getElementById('register-studentid').value;
    const email = document.getElementById('register-email').value;
    setUser({
      username,
      studentId,
      email,
      joinedDate: new Date().toISOString().split('T')[0],
      bookings: []
    });
    closeModal();
  };

  // User profile handlers
  const handleProfileClick = () => setShowProfile(true);
  const closeProfile = () => setShowProfile(false);
  
  const handleLogout = () => {
    setUser(null);
    setShowProfile(false);
  };

  // Book Now button handler
  const handleBookNow = (room) => {
    if (!room) {
      setActiveTab('register');
      setShowModal(true);
      return;
    }
    setRoomForPayment(room);
    setShowPayment(true);
  };

  // Handle payment selection
  const handlePaymentSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  // Handle payment submission
  const handlePaymentSubmit = async () => {
    if (!selectedPaymentMethod) {
      setBookingStatus({
        status: 'error',
        message: 'Please select a payment method'
      });
      return;
    }

    if (!user) {
      setBookingStatus({
        status: 'error',
        message: 'Please log in to continue'
      });
      return;
    }

    setIsProcessing(true);
    try {
      // 1. Check availability
      const currentRoom = rooms.find(r => r.name === roomForPayment.name);
      if (!currentRoom || currentRoom.availableBedspaces === 0) {
        throw new Error('Sorry, this room is no longer available');
      }

      // TODO: Integrate with backend API
      // 2. Process payment
      // const paymentResponse = await fetch('/api/payments', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     roomId: roomForPayment.id,
      //     userId: user.id,
      //     amount: roomForPayment.price,
      //     method: selectedPayment
      //   })
      // });
      // if (!paymentResponse.ok) {
      //   const paymentError = await paymentResponse.json();
      //   throw new Error(paymentError.message);
      // }
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating payment processing
      
      // 2. Save booking to database and update bedspace count
      const updatedRoom = {
        ...currentRoom,
        availableBedspaces: currentRoom.availableBedspaces - 1,
        availability: currentRoom.availableBedspaces - 1 === 0 ? 'unavailable' : 'available'
      };

      // Update the rooms array
      setRooms(prevRooms => {
        return prevRooms.map(r => r.name === roomForPayment.name ? updatedRoom : r);
      });

      const bedspaceNumber = currentRoom.totalBedspaces - (currentRoom.availableBedspaces - 1);
      const bookingData = {
        roomId: roomForPayment.type,
        roomName: roomForPayment.name,
        price: roomForPayment.price,
        paymentMethod: selectedPayment,
        status: 'confirmed',
        bookingDate: new Date().toISOString(),
        academicYear: '2025/2026',
        bedspace: bedspaceNumber,
        totalBedspaces: currentRoom.totalBedspaces
      };
      
      // In a real app, you would make an API call to save the booking
      // await saveBookingToDatabase(bookingData);
      
      // 3. Send confirmation
      // In a real app, you would trigger email/SMS notifications here
      setBookingStatus({
        status: 'success',
        message: 'Booking confirmed! Check your email for details.'
      });

      // Update booking history
      const newBooking = {
        room: bookingData.roomName,
        year: bookingData.academicYear,
        status: 'Confirmed',
        price: bookingData.price,
        bedspace: `Bed ${bookingData.bedspace} of ${bookingData.totalBedspaces}`
      };
      
      // Update the user's booking history
      setUser(prevUser => ({
        ...prevUser,
        bookings: [newBooking, ...(prevUser.bookings || [])]
      }));

      // Close payment modal after 2 seconds
      setTimeout(() => {
        setShowPayment(false);
        setSelectedPayment('');
        setRoomForPayment(null);
        setBookingStatus({ status: '', message: '' });
      }, 2000);

    } catch (error) {
      setBookingStatus({
        status: 'error',
        message: 'Payment failed. Please try again.'
      });
    } finally {
      setIsProcessing(false);
    }
  };

  // Handler for Explore/Discover More buttons
  const handleMoreInfo = (type) => {
    setMoreInfoType(type);
    setShowMoreInfo(true);
  };

  const closeMoreInfo = () => setShowMoreInfo(false);

  return (
    <>
      {/* Navigation */}
      <NavBar 
        user={user}
        onLogin={() => {
          setActiveTab('login');
          setShowModal(true);
        }}
        onRegister={() => {
          setActiveTab('register');
          setShowModal(true);
        }}
        onLogout={handleLogout}
        onProfileClick={() => setShowProfile(true)}
        onNavClick={handleNavClick}
      />

      {/* Main Content */}
      <main>
        <About onDiscover={() => handleMoreInfo('about')} />
        <Facilities onExplore={() => handleMoreInfo('explore')} />
        <Rooms 
          rooms={filteredRooms}
          loading={loading}
          error={error}
          filters={{
            roomType,
            roomFloor,
            roomPrice,
            roomAvailability,
            roomSearch
          }}
          onFilterChange={{
            onTypeChange: setRoomType,
            onFloorChange: setRoomFloor,
            onPriceChange: setRoomPrice,
            onAvailabilityChange: setRoomAvailability,
            onSearchChange: setRoomSearch
          }}
          onRoomSelect={room => {
            setSelectedRoom(room);
            setShowRoomDetails(true);
          }}
          onBookNow={room => {
            if (!user) {
              setActiveTab('login');
              setShowModal(true);
            } else {
              setShowPayment(true);
              setRoomForPayment(room);
            }
          }}
          onViewHistory={() => setShowHistory(true)}
        />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer onNavClick={handleNavClick} />

      {/* Modals */}
      <AuthModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        activeTab={activeTab}
        onTabSwitch={setActiveTab}
        onLogin={handleLogin}
        onRegister={handleRegister}
      />

      <PaymentModal
        isOpen={showPayment}
        onClose={() => {
          setShowPayment(false);
          setSelectedPayment('');
          setRoomForPayment(null);
        }}
        room={roomForPayment}
        selectedPayment={selectedPayment}
        onPaymentSelect={handlePaymentSelect}
        onPaymentSubmit={handlePaymentSubmit}
        isProcessing={isProcessing}
        bookingStatus={bookingStatus}
      />

      <RoomDetailsModal 
        isOpen={showRoomDetails}
        onClose={() => setShowRoomDetails(false)}
        room={selectedRoom}
        onImageSelect={(img) => setSelectedRoom(prev => ({...prev, img}))}
        onBook={() => {
          setShowRoomDetails(false);
          if (!user) {
            setActiveTab('login');
            setShowModal(true);
          } else {
            setShowPayment(true);
            setRoomForPayment(selectedRoom);
          }
        }}
      />

      <BookingHistory
        isOpen={showHistory}
        onClose={() => setShowHistory(false)}
        bookings={user?.bookings || []}
      />

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        activeTab={activeTab}
        onTabSwitch={setActiveTab}
        onLogin={handleLogin}
        onRegister={handleRegister}
      />

      {/* Explore Section */}
      <section className="section__container explore__container" id="explore">
        <div className="explore__image">
          <img src="/assets/explore.jpg" alt="Explore Hostels" />
        </div>
        <div className="explore__content">
          <p className="section__subheader">EXPLORE TWELVE HOSTEL</p>
          <h2 className="section__header">A Vibrant Student Community</h2>
          <p className="section__description">
            Discover a lively environment where students from all backgrounds come together. Enjoy events, study groups, and a supportive network that makes your university experience unforgettable.
          </p>
          <div className="explore__btn">
            <button className="btn" type="button" onClick={() => handleMoreInfo('explore')}>Explore More</button>
          </div>
        </div>
      </section>

      {/* More Info Modal */}
      {showMoreInfo && (
        <div className="login-modal" style={{display:'flex',position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(0,0,0,0.5)',zIndex:1000,alignItems:'center',justifyContent:'center'}}>
          <div className="login-modal-content" style={{maxWidth:'600px',width:'100%'}}>
            <h2 style={{marginBottom:'1.5rem',color:'#2d3748',fontWeight:600}}>
              {moreInfoType === 'explore' ? 'Explore Twelve Hostel' : 'About Twelve Hostel'}
            </h2>
            {moreInfoType === 'explore' ? (
              <>
                <p style={{marginBottom:'1rem'}}>
                  Discover everything Twelve Hostel has to offer:
                </p>
                <ul style={{marginBottom:'1.5rem',paddingLeft:'1.2rem'}}>
                  <li style={{marginBottom:'0.5rem'}}>Strategic location near campus</li>
                  <li style={{marginBottom:'0.5rem'}}>24/7 security and CCTV surveillance</li>
                  <li style={{marginBottom:'0.5rem'}}>High-speed Wi-Fi throughout the building</li>
                  <li style={{marginBottom:'0.5rem'}}>Modern study areas and lounges</li>
                  <li style={{marginBottom:'0.5rem'}}>Regular community events and activities</li>
                  <li style={{marginBottom:'0.5rem'}}>Professional cleaning services</li>
                  <li style={{marginBottom:'0.5rem'}}>Dedicated student support team</li>
                </ul>
              </>
            ) : (
              <>
                <p style={{marginBottom:'1rem'}}>
                  Founded in 2020, Twelve Hostel has become the premier choice for student accommodation at KNUST:
                </p>
                <ul style={{marginBottom:'1.5rem',paddingLeft:'1.2rem'}}>
                  <li style={{marginBottom:'0.5rem'}}>Over 500 satisfied students housed annually</li>
                  <li style={{marginBottom:'0.5rem'}}>Award-winning student accommodation</li>
                  <li style={{marginBottom:'0.5rem'}}>Partnerships with KNUST and local businesses</li>
                  <li style={{marginBottom:'0.5rem'}}>Eco-friendly building and operations</li>
                  <li style={{marginBottom:'0.5rem'}}>Regular upgrades and maintenance</li>
                  <li style={{marginBottom:'0.5rem'}}>Strong focus on student community</li>
                </ul>
              </>
            )}
            <div style={{display:'flex',gap:'1rem',justifyContent:'flex-end'}}>
              <button className="btn" onClick={handleBookNow}>Book Now</button>
              <button className="btn" style={{background:'#f3f4f6',color:'#333'}} onClick={closeMoreInfo}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
            <section className="section__container testimonial__container" style={{
        background: 'linear-gradient(to bottom, #f8fafc, #ffffff)',
        borderRadius: '16px',
        padding: '4rem 2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'url("/assets/about.jpg") center/cover',
          opacity: 0.05,
          zIndex: 0
        }}></div>
        
        <div style={{position: 'relative', zIndex: 1}}>
          <p className="section__subheader" style={{
            color: '#2563eb',
            fontWeight: 600,
            letterSpacing: '2px',
            marginBottom: '1rem'
          }}>STUDENT TESTIMONIALS</p>
          
          <h2 className="section__header" style={{
            fontSize: '2.5rem',
            marginBottom: '3rem',
            textAlign: 'center',
            color: '#1e293b'
          }}>What Our Residents Say</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {[
              {
                name: 'Ama K.',
                role: 'Level 200, Business Administration',
                image: 'src/assets/ama.PNG',
                text: 'Twelve Hostel made my first year at university so much easier. The staff are friendly, rooms are super comfortable, and the study areas are perfect for focused learning. The sense of community here is incredible!',
                rating: 5,
                highlight: 'Comfortable Living'
              },
              {
                name: 'Kwame B.',
                role: 'Level 300, Computer Science',
                image: 'src/assets/kwame.PNG',
                text: 'As a tech student, reliable internet is crucial. The Wi-Fi here is lightning fast, and the study lounges are perfect for group projects. Plus, the social events help maintain a great work-life balance.',
                rating: 5,
                highlight: 'Perfect for Studies'
              },
              {
                name: 'Linda O.',
                role: 'Level 100, Engineering',
                image: 'src/assets/linda.PNG',
                text: 'Coming from another city, I was worried about accommodation. Twelve Hostel exceeded my expectations with its security, cleanliness, and wonderful community. It truly feels like a home away from home!',
                rating: 5,
                highlight: 'Safe & Welcoming'
              }
            ].map((testimonial, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                ':hover': {
                  transform: 'translateY(-5px)'
                }
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '24px',
                  background: '#2563eb',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>
                  {testimonial.highlight}
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                  marginTop: '1rem'
                }}>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '3px solid #2563eb'
                    }}
                  />
                  <div style={{marginLeft: '1rem'}}>
                    <h4 style={{
                      color: '#1e293b',
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      marginBottom: '0.25rem'
                    }}>{testimonial.name}</h4>
                    <span style={{
                      color: '#64748b',
                      fontSize: '0.875rem'
                    }}>{testimonial.role}</span>
                  </div>
                </div>

                <p style={{
                  color: '#475569',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                  fontSize: '1rem',
                  fontStyle: 'italic'
                }}>"{testimonial.text}"</p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{
                    color: '#eab308',
                    letterSpacing: '1px'
                  }}>
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  <div style={{
                    color: '#64748b',
                    fontSize: '0.875rem'
                  }}>
                    Verified Resident
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <button 
              className="btn"
              onClick={() => openAuthModal('register')}
              style={{
                background: '#2563eb',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                fontSize: '1.125rem',
                fontWeight: 500,
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.3)'
              }}
            >
              Join Our Community
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

    
      {/* About Section */}
      <About onDiscover={() => handleMoreInfo('about')} />

      {/* Rooms Section */}
      <Rooms 
        rooms={filteredRooms}
        loading={loading}
        error={error}
        filters={{
          roomType,
          roomFloor,
          roomPrice,
          roomAvailability,
          roomSearch
        }}
        onFilterChange={{
          onTypeChange: setRoomType,
          onFloorChange: setRoomFloor,
          onPriceChange: setRoomPrice,
          onAvailabilityChange: setRoomAvailability,
          onSearchChange: setRoomSearch
        }}
        onRoomSelect={room => {
          setSelectedRoom(room);
          setShowRoomDetails(true);
        }}
        onBookNow={room => {
          if (!user) {
            setActiveTab('login');
            setShowModal(true);
          } else {
            setShowPayment(true);
            setRoomForPayment(room);
          }
        }}
        onViewHistory={() => setShowHistory(true)}
      />
      {/* Booking History Modal */}
      <BookingHistory
        isOpen={showHistory}
        onClose={() => setShowHistory(false)}
        bookings={user?.bookings || []}
      />

      {/* Room Details Modal */}
      <RoomDetailsModal 
        isOpen={showRoomDetails}
        onClose={() => setShowRoomDetails(false)}
        room={selectedRoom}
        onImageSelect={(img) => setSelectedRoom(prev => ({...prev, img}))}
        onBook={() => {
          setShowRoomDetails(false);
          if (!user) {
            setActiveTab('login');
            setShowModal(true);
          } else {
            setShowPayment(true);
            setRoomForPayment(selectedRoom);
          }
        }}
      />

      {/* Facilities Section */}
      <Facilities onExplore={() => handleMoreInfo('explore')} />

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPayment}
        onClose={() => {
          setShowPayment(false);
          setSelectedPayment('');
          setRoomForPayment(null);
        }}
        room={roomForPayment}
        selectedPayment={selectedPayment}
        onPaymentSelect={handlePaymentSelect}
        onPaymentSubmit={handlePaymentSubmit}
        isProcessing={isProcessing}
        bookingStatus={bookingStatus}
      />

      {/* User Profile Modal */}
      {showProfile && user && (
        <div className="login-modal" style={{display:'flex',position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(0,0,0,0.5)',zIndex:1000,alignItems:'center',justifyContent:'center'}}>
          <div className="login-modal-content" style={{maxWidth:'600px',width:'100%'}}>
            <div style={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'2rem'}}>
              <div style={{
                width:'64px',
                height:'64px',
                borderRadius:'50%',
                background:'#e2e8f0',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                fontSize:'1.5rem'
              }}>
                {user.username.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 style={{color:'#2d3748',fontWeight:600}}>{user.username}</h2>
                <p style={{color:'#64748b'}}>Student ID: {user.studentId}</p>
              </div>
            </div>

            <div style={{marginBottom:'2rem'}}>
              <h3 style={{marginBottom:'1rem',color:'#2d3748'}}>Personal Information</h3>
              <div style={{display:'grid',gap:'1rem'}}>
                <div>
                  <label style={{display:'block',marginBottom:'0.25rem',color:'#64748b'}}>Email</label>
                  <input type="email" value={user.email} readOnly style={{
                    width:'100%',
                    padding:'0.75rem',
                    borderRadius:'6px',
                    border:'1px solid #e2e8f0',
                    background:'#f8fafc'
                  }} />
                </div>
                <div>
                  <label style={{display:'block',marginBottom:'0.25rem',color:'#64748b'}}>Member Since</label>
                  <input type="text" value={user.joinedDate} readOnly style={{
                    width:'100%',
                    padding:'0.75rem',
                    borderRadius:'6px',
                    border:'1px solid #e2e8f0',
                    background:'#f8fafc'
                  }} />
                </div>
              </div>
            </div>

            <div style={{marginBottom:'2rem'}}>
              <h3 style={{marginBottom:'1rem',color:'#2d3748'}}>Your Bookings</h3>
              <div style={{maxHeight:'300px',overflowY:'auto'}}>
                {user.bookings.length === 0 ? (
                  <p style={{textAlign:'center',color:'#64748b',padding:'2rem'}}>No bookings yet</p>
                ) : (
                  <table style={{width:'100%',borderCollapse:'collapse'}}>
                    <thead>
                      <tr style={{background:'#f8fafc'}}>
                        <th style={{padding:'0.75rem',textAlign:'left'}}>Room</th>
                        <th style={{padding:'0.75rem',textAlign:'left'}}>Year</th>
                        <th style={{padding:'0.75rem',textAlign:'left'}}>Status</th>
                        <th style={{padding:'0.75rem',textAlign:'left'}}>Price</th>
                        <th style={{padding:'0.75rem',textAlign:'left'}}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user.bookings.map((booking, index) => (
                        <tr key={index} style={{borderBottom:'1px solid #e2e8f0'}}>
                          <td style={{padding:'0.75rem'}}>{booking.room}</td>
                          <td style={{padding:'0.75rem'}}>{booking.year}</td>
                          <td style={{padding:'0.75rem'}}>
                            <span style={{
                              padding:'0.25rem 0.5rem',
                              borderRadius:'9999px',
                              fontSize:'0.875rem',
                              background: booking.status === 'Confirmed' ? '#dcfce7' : '#f8fafc',
                              color: booking.status === 'Confirmed' ? '#166534' : '#64748b'
                            }}>
                              {booking.status}
                            </span>
                          </td>
                          <td style={{padding:'0.75rem'}}>₵{booking.price.toLocaleString()}</td>
                          <td style={{padding:'0.75rem'}}>
                            {booking.status === 'Confirmed' && (
                              <button
                                onClick={() => {
                                  const updatedBookings = [...user.bookings];
                                  updatedBookings[index] = {...booking, status: 'Cancelled'};
                                  setUser({...user, bookings: updatedBookings});
                                }}
                                style={{
                                  padding:'0.25rem 0.5rem',
                                  borderRadius:'4px',
                                  border:'none',
                                  background:'#fee2e2',
                                  color:'#991b1b',
                                  cursor:'pointer'
                                }}
                              >
                                Cancel
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            <div style={{display:'flex',justifyContent:'flex-end',gap:'1rem'}}>
              <button className="btn" style={{background:'#f3f4f6',color:'#333'}} onClick={closeProfile}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer onNavClick={handleNavClick} />
    </>
  );
}

export default App;
