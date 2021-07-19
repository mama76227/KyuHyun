import React from 'react';

const Footer = () => (
    <div className="footer">
        <Modal></Modal>
    </div>
)
function Modal(){
    return (
    <div className="modal">
          <h2>home training</h2>
          <p>김지욱</p>
          <p>궁금하신 내용은 kims2521@naver.com 문의주세요.</p>
    </div>
    )
  }
export default Footer;