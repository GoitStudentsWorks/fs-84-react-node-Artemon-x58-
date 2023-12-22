import styled from 'styled-components';

export const MobileMenuWrapper = styled.div`
  width: 192px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const OpenMenuBtn = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  background: none;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  width: 300px;
  height: 184px;

  border-radius: 12px;
  background: #0f0f0f;
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
`;
export const CardMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
  width: 252px;
  height: 136px;
  padding: 24px;
`;

export const CardItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const ImgWrapper = styled.div`
  width: 26px;
  height: 26px;
  padding: 10px;
  margin-right: 16px;

  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: rgba(255, 255, 255, 0.01);
  img {
    width: 100%;
    height: 100%;
  }
`;
export const Title = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  color: #fff;
`;
export const Value = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: #fff;
`;
export const CloseBtn = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  width: 16px;
  height: 16px;
  background: none;
  border: none;

  svg {
    width: 100%;
    height: 100%;
  }
`;