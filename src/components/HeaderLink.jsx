const HeaderLink = ({ link }) => {
  return (
    <div className='headerLinkContainer'>
      <div className='headerLink'>
        <div className='headerLinkIcon'>{link.icon}</div>
        <span className='headerLinkLabel'>{link.label}</span>
      </div>
    </div>
  );
};

export default HeaderLink;
