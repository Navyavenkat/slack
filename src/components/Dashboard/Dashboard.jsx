
// import React, { useState } from 'react';
// import './Dashboard.css';
// import { IoIosMenu } from "react-icons/io";
// import { FaUserGraduate, FaHome, FaBell, FaArrowLeft, FaHashtag, FaLock, FaArrowRight, FaRegClock, FaAngleDown } from "react-icons/fa";
// import { LuMessagesSquare, LuMoreHorizontal } from "react-icons/lu";
// import { CiCirclePlus, CiSearch } from "react-icons/ci";
// import { CgChevronDoubleRightO } from "react-icons/cg";
// import { LiaUserClockSolid } from "react-icons/lia";
// import ChatWindow from '../ChatWindow/ChatWindow';
// import { RxQuestionMarkCircled } from "react-icons/rx";
// import { RiChatThreadLine } from "react-icons/ri";

// const Dashboard = () => {
//   const [activePage, setActivePage] = useState('thread');
//   const [showSubChannels, setShowSubChannels] = useState(false);
//   const [activeChannel, setActiveChannel] = useState('public');
//   const [channels, setChannels] = useState([]);
//   const [newChannelName, setNewChannelName] = useState('');
//   const [newChannelDescription, setNewChannelDescription] = useState('');
//   const [newChannelVisibility, setNewChannelVisibility] = useState('public');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchSuggestions, setSearchSuggestions] = useState([]);
//   const [showAddChannelForm, setShowAddChannelForm] = useState(false);

//   const handleAddChannel = (e) => {
//     e.preventDefault();

//     const newChannel = {
//       name: newChannelName,
//       description: newChannelDescription,
//       visibility: newChannelVisibility
//     };

//     setChannels([...channels, newChannel]);

//     setNewChannelName('');
//     setNewChannelDescription('');
//     setNewChannelVisibility('public');

//     setShowAddChannelForm(false);
//     setActivePage('channels');
//     setShowSubChannels(true);
//   };

//   const handleChannelClick = () => {
//     setActivePage('channels');
//     setShowSubChannels(!showSubChannels);
//   };

//   const handleSearchInputChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);

//     const combinedSuggestions = [
//       ...channels,
//       { name: "Channel 1", visibility: 'public' },
//       { name: "Channel 2", visibility: 'public' },
//       { name: "Channel 3", visibility: 'public' }
//     ].filter(channel => channel.name.toLowerCase().includes(query.toLowerCase()));

//     setSearchSuggestions(combinedSuggestions);
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setActiveChannel(suggestion.visibility);
//     setSearchQuery('');
//     setShowSubChannels(true);
//   };

//   const renderContent = () => {
//     switch (activePage) {
//       case 'thread':
//         return <div>Thread Content</div>;
//       case 'draftsAndSent':
//         return <div>Drafts & Sent Content</div>;
//       case 'channels':
//         return renderChannelContent();
//       case 'directMessage':
//         return <ChatWindow />;
//       case 'apps':
//         return <div>Apps Content</div>;
//       default:
//         return <div>Default Content</div>;
//     }
//   };

//   const renderChannelContent = () => {
//     if (!showSubChannels) {
//       return null;
//     }

//     const filteredChannels = searchQuery.length > 0 ? searchSuggestions : channels;

//     return (
//       <div className="channel-content">
//         <div className="search-add-container">
//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder="Search Channels..."
//               value={searchQuery}
//               onChange={handleSearchInputChange}
//             />
//             <CiSearch className="search-icon" />
//             {searchQuery.length > 0 && (
//               <ul className="suggestions">
//                 {searchSuggestions.map((suggestion, index) => (
//                   <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//                     {suggestion.name}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           <button className="add-channel-button" onClick={() => setShowAddChannelForm(!showAddChannelForm)}>
//             {showAddChannelForm ? 'Cancel' : 'Add Channel'}
//           </button>
//         </div>

//         {showAddChannelForm && (
//           <div className="add-channel-form">
//             <h2>Add New Channel</h2>
//             <form onSubmit={handleAddChannel}>
//               <div className="form-group">
//                 <label htmlFor="newChannelName">Channel Name </label>
//                 <input
//                   type="text"
//                   id="newChannelName"
//                   value={newChannelName}
//                   onChange={(e) => setNewChannelName(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="newChannelDescription">Description </label>
//                 <input
//                   type="text"
//                   id="newChannelDescription"
//                   value={newChannelDescription}
//                   onChange={(e) => setNewChannelDescription(e.target.value)}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="newChannelVisibility">Visibility</label>
//                 <select
//                   id="newChannelVisibility"
//                   value={newChannelVisibility}
//                   onChange={(e) => setNewChannelVisibility(e.target.value)}
//                 >
//                   <option value="public">Public</option>
//                   <option value="private">Private</option>
//                 </select>
//               </div>

//               <button type="submit">Create Channel</button>
//             </form>
//           </div>
//         )}

//         <nav className="sub-navbar">
//         <a href="#" onClick={() => setActiveChannel('public')}><FaHashtag />General</a>
//         <a href="#" onClick={() => setActiveChannel('private')}><FaLock />Private</a>
//           {filteredChannels.map((channel, index) => (
            
//             <a href="#" key={index} onClick={() => setActiveChannel(channel.visibility)}>
//               {channel.visibility === 'public' ? <FaHashtag /> : <FaLock />}
//               {channel.name}
//             </a>
//           ))}
//         </nav>
//       </div>
//     );
//   };

//   return (
//     <div className="container">
//       <header className="header">
//         <IoIosMenu className="menu-icon" />
//         <FaArrowLeft className='arr-l'/>
//         <FaArrowRight className='arr-r' />
//         <FaRegClock  className='clk'/>
//         <RxQuestionMarkCircled className='qm'/>
//         <div className='rec'>
//           <input type="text" placeholder="Search..." />
//           <CiSearch className="rec-ico"/>
//         </div>
//       </header>
//       <aside className="sidebar">
//         <FaUserGraduate className="student-icon" />
//         <FaHome className="Home" />
//         <LuMessagesSquare className="Mes" />
//         <FaBell className="act" />
//         <LuMoreHorizontal className="ico" />
//         <CiCirclePlus className="plus" />
//         <LiaUserClockSolid className="active" />
//       </aside>
//       <div className="inner-box">
//         <nav className="navbar">
//           <a href="#" onClick={() => setActivePage('thread')} className='thr'><RiChatThreadLine />Thread</a>
//           <a href="#" onClick={() => setActivePage('draftsAndSent')} className="draft"><CgChevronDoubleRightO />Drafts & Sent</a>
//           <a href="#" onClick={handleChannelClick}><FaAngleDown />Channels</a>
//           {showSubChannels && activePage === 'channels' && (
//             <div className="nested-nav">
//               <a href="#" onClick={() => setActiveChannel('public')}><FaHashtag />General</a>
//               <a href="#" onClick={() => setActiveChannel('private')}><FaLock />Private</a>
//               {channels.map((channel, index) => (
//                 <a href="#" key={index} onClick={() => setActiveChannel(channel.visibility)}>
//                   {channel.visibility === 'public' ? <FaHashtag /> : <FaLock />}
//                   {channel.name}
//                 </a>
//               ))}
//             </div>
//           )}
//           <a href="#" onClick={() => setActivePage('directMessage')} className='message'><FaAngleDown />Direct Message</a>
//           <a href="#" onClick={() => setActivePage('apps')} className='app'><FaAngleDown />Apps</a>
//         </nav>
//       </div>
//       <div className="sub-box">
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import './Dashboard.css';
import { IoIosMenu } from "react-icons/io";
import { FaUserGraduate, FaHome, FaBell, FaArrowLeft, FaHashtag, FaLock, FaArrowRight, FaRegClock, FaAngleDown } from "react-icons/fa";
import { LuMessagesSquare, LuMoreHorizontal } from "react-icons/lu";
import { CiCirclePlus, CiSearch } from "react-icons/ci";
import { CgChevronDoubleRightO } from "react-icons/cg";
import { LiaUserClockSolid } from "react-icons/lia";
import ChatWindow from '../ChatWindow/ChatWindow';
import { RxQuestionMarkCircled } from "react-icons/rx";
import { RiChatThreadLine } from "react-icons/ri";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [activePage, setActivePage] = useState('thread');
  const [showSubChannels, setShowSubChannels] = useState(false);
  const [activeChannel, setActiveChannel] = useState('public');
  const [channels, setChannels] = useState([]);
  const [newChannelName, setNewChannelName] = useState('');
  const [newChannelDescription, setNewChannelDescription] = useState('');
  const [newChannelVisibility, setNewChannelVisibility] = useState('public');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showAddChannelForm, setShowAddChannelForm] = useState(false);

  const handleAddChannel = (e) => {
    e.preventDefault();

    const newChannel = {
      name: newChannelName,
      description: newChannelDescription,
      visibility: newChannelVisibility
    };

    setChannels([...channels, newChannel]);

    setNewChannelName('');
    setNewChannelDescription('');
    setNewChannelVisibility('public');

    setShowAddChannelForm(false);
    setActivePage('channels');
    setShowSubChannels(true);

    // Show a success toast notification
    toast.success(`Channel "${newChannel.name}" created successfully!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleChannelClick = () => {
    setActivePage('channels');
    setShowSubChannels(!showSubChannels);
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const combinedSuggestions = [
      ...channels,
      { name: "Channel 1", visibility: 'public' },
      { name: "Channel 2", visibility: 'public' },
      { name: "Channel 3", visibility: 'public' }
    ].filter(channel => channel.name.toLowerCase().includes(query.toLowerCase()));

    setSearchSuggestions(combinedSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setActiveChannel(suggestion.visibility);
    setSearchQuery('');
    setShowSubChannels(true);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'thread':
        return <div>Thread Content</div>;
      case 'draftsAndSent':
        return <div>Drafts & Sent Content</div>;
      case 'channels':
        return renderChannelContent();
      case 'directMessage':
        return <ChatWindow />;
      case 'apps':
        return <div>Apps Content</div>;
      default:
        return <div>Default Content</div>;
    }
  };

  const renderChannelContent = () => {
    if (!showSubChannels) {
      return null;
    }

    const filteredChannels = searchQuery.length > 0 ? searchSuggestions : channels;

    return (
      <div className="channel-content">
        <div className="search-add-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Channels..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <CiSearch className="search-icon" />
            {searchQuery.length > 0 && (
              <ul className="suggestions">
                {searchSuggestions.map((suggestion, index) => (
                  <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                    {suggestion.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="add-channel-button" onClick={() => setShowAddChannelForm(!showAddChannelForm)}>
            {showAddChannelForm ? 'Cancel' : 'Add Channel'}
          </button>
        </div>

        {showAddChannelForm && (
          <div className="add-channel-form">
            <h2>Add New Channel</h2>
            <form onSubmit={handleAddChannel}>
              <div className="form-group">
                <label htmlFor="newChannelName">Channel Name </label>
                <input
                  type="text"
                  id="newChannelName"
                  value={newChannelName}
                  onChange={(e) => setNewChannelName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="newChannelDescription">Description </label>
                <input
                  type="text"
                  id="newChannelDescription"
                  value={newChannelDescription}
                  onChange={(e) => setNewChannelDescription(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="newChannelVisibility">Visibility</label>
                <select
                  id="newChannelVisibility"
                  value={newChannelVisibility}
                  onChange={(e) => setNewChannelVisibility(e.target.value)}
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>

              <button type="submit">Create Channel</button>
            </form>
          </div>
        )}

        <nav className="sub-navbar">
          <a href="#" onClick={() => setActiveChannel('public')}><FaHashtag />General</a>
          <a href="#" onClick={() => setActiveChannel('private')}><FaLock />Private</a>
          {filteredChannels.map((channel, index) => (
            <a href="#" key={index} onClick={() => setActiveChannel(channel.visibility)}>
              {channel.visibility === 'public' ? <FaHashtag /> : <FaLock />}
              {channel.name}
            </a>
          ))}
        </nav>
      </div>
    );
  };

  return (
    <div className="container">
      <header className="header">
        <IoIosMenu className="menu-icon" />
        <FaArrowLeft className='arr-l'/>
        <FaArrowRight className='arr-r' />
        <FaRegClock  className='clk'/>
        <RxQuestionMarkCircled className='qm'/>
        <div className='rec'>
          <input type="text" placeholder="Search..." />
          <CiSearch className="rec-ico"/>
        </div>
      </header>
      <aside className="sidebar">
        <FaUserGraduate className="student-icon" />
        <FaHome className="Home" />
        <LuMessagesSquare className="Mes" />
        <FaBell className="act" />
        <LuMoreHorizontal className="ico" />
        <CiCirclePlus className="plus" />
        <LiaUserClockSolid className="active" />
      </aside>
      <div className="inner-box">
        <nav className="navbar">
          <a href="#" onClick={() => setActivePage('thread')} className='thr'><RiChatThreadLine />Thread</a>
          <a href="#" onClick={() => setActivePage('draftsAndSent')} className="draft"><CgChevronDoubleRightO />Drafts & Sent</a>
          <a href="#" onClick={handleChannelClick}><FaAngleDown />Channels</a>
          {showSubChannels && activePage === 'channels' && (
            <div className="nested-nav">
              <a href="#" onClick={() => setActiveChannel('public')}><FaHashtag />General</a>
              <a href="#" onClick={() => setActiveChannel('private')}><FaLock />Private</a>
              {channels.map((channel, index) => (
                <a href="#" key={index} onClick={() => setActiveChannel(channel.visibility)}>
                  {channel.visibility === 'public' ? <FaHashtag /> : <FaLock />}
                  {channel.name}
                </a>
              ))}
            </div>
          )}
          <a href="#" onClick={() => setActivePage('directMessage')} className='message'><FaAngleDown />Direct Message</a>
          <a href="#" onClick={() => setActivePage('apps')} className='app'><FaAngleDown />Apps</a>
        </nav>
      </div>
      <div className="sub-box">
        {renderContent()}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
