import { Container, Row } from "react-bootstrap";
import StepSectionItem from "./StepSectionItem";

function StepSection() {
  return (
    <Container className="d-flex justify-content-center py-5">
      <Row>
        <StepSectionItem
          badge={
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.8199 17.28C42.8199 17.28 42.8199 17.28 42.8199 17.18C41.4107 13.3325 38.8537 10.0106 35.4949 7.66373C32.136 5.31689 28.1374 4.05835 24.0399 4.05835C19.9424 4.05835 15.9438 5.31689 12.5849 7.66373C9.22607 10.0106 6.6691 13.3325 5.2599 17.18C5.2599 17.18 5.2599 17.18 5.2599 17.28C3.68615 21.6218 3.68615 26.3782 5.2599 30.72C5.2599 30.72 5.2599 30.72 5.2599 30.82C6.6691 34.6676 9.22607 37.9894 12.5849 40.3363C15.9438 42.6831 19.9424 43.9417 24.0399 43.9417C28.1374 43.9417 32.136 42.6831 35.4949 40.3363C38.8537 37.9894 41.4107 34.6676 42.8199 30.82C42.8199 30.82 42.8199 30.82 42.8199 30.72C44.3936 26.3782 44.3936 21.6218 42.8199 17.28ZM8.5199 28C7.82636 25.3784 7.82636 22.6216 8.5199 20H12.2399C11.92 22.6571 11.92 25.3429 12.2399 28H8.5199ZM10.1599 32H12.9599C13.4293 33.7837 14.1003 35.5081 14.9599 37.14C12.9985 35.8039 11.3589 34.0481 10.1599 32ZM12.9599 16H10.1599C11.3416 13.9582 12.9603 12.2029 14.8999 10.86C14.061 12.4945 13.4102 14.2188 12.9599 16ZM21.9999 39.4C19.5434 37.5974 17.8182 34.9705 17.1399 32H21.9999V39.4ZM21.9999 28H16.2799C15.9067 25.3464 15.9067 22.6536 16.2799 20H21.9999V28ZM21.9999 16H17.1399C17.8182 13.0295 19.5434 10.4026 21.9999 8.60001V16ZM37.8399 16H35.0399C34.5705 14.2163 33.8995 12.4919 33.0399 10.86C35.0013 12.1961 36.6409 13.9519 37.8399 16ZM25.9999 8.60001C28.4564 10.4026 30.1816 13.0295 30.8599 16H25.9999V8.60001ZM25.9999 39.4V32H30.8599C30.1816 34.9705 28.4564 37.5974 25.9999 39.4ZM31.7199 28H25.9999V20H31.7199C32.0931 22.6536 32.0931 25.3464 31.7199 28ZM33.0999 37.14C33.9595 35.5081 34.6305 33.7837 35.0999 32H37.8999C36.7009 34.0481 35.0613 35.8039 33.0999 37.14ZM39.4799 28H35.7599C35.9226 26.6729 36.0027 25.337 35.9999 24C36.0021 22.663 35.9219 21.3271 35.7599 20H39.4799C40.1734 22.6216 40.1734 25.3784 39.4799 28Z"
                fill="white"
              />
            </svg>
          }
          title={"Masuk Halaman"}
          description={"Masuk ke halaman pertanyaan melalui tombol yang tersedia."}
        />
        <StepSectionItem
          badge={
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.44 17.58L20.86 26.18L17.56 22.88C17.3807 22.6706 17.1601 22.5006 16.9119 22.3805C16.6638 22.2605 16.3936 22.193 16.1181 22.1824C15.8427 22.1718 15.568 22.2182 15.3114 22.3187C15.0547 22.4193 14.8216 22.5718 14.6267 22.7667C14.4318 22.9616 14.2793 23.1947 14.1787 23.4514C14.0782 23.708 14.0318 23.9827 14.0424 24.2581C14.0531 24.5335 14.1205 24.8038 14.2406 25.0519C14.3606 25.3001 14.5306 25.5207 14.74 25.7L19.44 30.42C19.6269 30.6054 19.8485 30.752 20.0922 30.8515C20.3359 30.9511 20.5968 31.0015 20.86 31C21.3847 30.9978 21.8875 30.7895 22.26 30.42L32.26 20.42C32.4475 20.2341 32.5963 20.0129 32.6978 19.7692C32.7993 19.5254 32.8516 19.264 32.8516 19C32.8516 18.736 32.7993 18.4746 32.6978 18.2308C32.5963 17.9871 32.4475 17.7659 32.26 17.58C31.8853 17.2075 31.3784 16.9984 30.85 16.9984C30.3216 16.9984 29.8147 17.2075 29.44 17.58ZM24 4C20.0444 4 16.1776 5.17298 12.8886 7.37061C9.59962 9.56824 7.03617 12.6918 5.52242 16.3463C4.00867 20.0009 3.6126 24.0222 4.3843 27.9018C5.15601 31.7814 7.06082 35.3451 9.85787 38.1421C12.6549 40.9392 16.2186 42.844 20.0982 43.6157C23.9778 44.3874 27.9992 43.9913 31.6537 42.4776C35.3082 40.9638 38.4318 38.4004 40.6294 35.1114C42.827 31.8224 44 27.9556 44 24C44 21.3736 43.4827 18.7728 42.4776 16.3463C41.4725 13.9198 39.9993 11.715 38.1421 9.85786C36.285 8.00069 34.0802 6.5275 31.6537 5.52241C29.2272 4.51732 26.6264 4 24 4ZM24 40C20.8355 40 17.7421 39.0616 15.1109 37.3035C12.4797 35.5454 10.4289 33.0466 9.21794 30.1229C8.00694 27.1993 7.69008 23.9823 8.30745 20.8786C8.92481 17.7749 10.4487 14.9239 12.6863 12.6863C14.9239 10.4487 17.7749 8.9248 20.8786 8.30744C23.9823 7.69007 27.1993 8.00693 30.1229 9.21793C33.0466 10.4289 35.5454 12.4797 37.3035 15.1109C39.0616 17.7421 40 20.8355 40 24C40 28.2435 38.3143 32.3131 35.3137 35.3137C32.3131 38.3143 28.2435 40 24 40Z"
                fill="white"
              />
            </svg>
          }
          title={"Jawab Pertanyaan"}
          description={"Jawab semua pertanyaan sesuai yang kamu rasakan."}
        />
        <StepSectionItem
          badge={
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.8401 23.2C39.8001 13.82 32.2001 8 24.0001 8C15.8001 8 8.20013 13.82 4.16013 23.2C4.05001 23.4523 3.99316 23.7247 3.99316 24C3.99316 24.2753 4.05001 24.5477 4.16013 24.8C8.20013 34.18 15.8001 40 24.0001 40C32.2001 40 39.8001 34.18 43.8401 24.8C43.9503 24.5477 44.0071 24.2753 44.0071 24C44.0071 23.7247 43.9503 23.4523 43.8401 23.2ZM24.0001 36C17.6601 36 11.6601 31.42 8.20013 24C11.6601 16.58 17.6601 12 24.0001 12C30.3401 12 36.3401 16.58 39.8001 24C36.3401 31.42 30.3401 36 24.0001 36ZM24.0001 16C22.4179 16 20.8712 16.4692 19.5556 17.3482C18.24 18.2273 17.2146 19.4767 16.6091 20.9385C16.0036 22.4003 15.8452 24.0089 16.1539 25.5607C16.4625 27.1126 17.2245 28.538 18.3433 29.6569C19.4621 30.7757 20.8876 31.5376 22.4394 31.8463C23.9913 32.155 25.5998 31.9965 27.0616 31.391C28.5234 30.7855 29.7728 29.7602 30.6519 28.4446C31.5309 27.129 32.0001 25.5823 32.0001 24C32.0001 21.8783 31.1573 19.8434 29.657 18.3431C28.1567 16.8429 26.1219 16 24.0001 16ZM24.0001 28C23.209 28 22.4356 27.7654 21.7779 27.3259C21.1201 26.8864 20.6074 26.2616 20.3046 25.5307C20.0019 24.7998 19.9227 23.9956 20.077 23.2196C20.2313 22.4437 20.6123 21.731 21.1717 21.1716C21.7311 20.6122 22.4438 20.2312 23.2198 20.0769C23.9957 19.9225 24.8 20.0017 25.5309 20.3045C26.2618 20.6072 26.8865 21.1199 27.326 21.7777C27.7655 22.4355 28.0001 23.2089 28.0001 24C28.0001 25.0609 27.5787 26.0783 26.8286 26.8284C26.0784 27.5786 25.061 28 24.0001 28Z"
                fill="white"
              />
            </svg>
          }
          title={"Lihat Hasil"}
          description={"Dapetin hasil gaya belajar yang cocok buatmu."}
        />
      </Row>
    </Container>
  );
}

export default StepSection;
