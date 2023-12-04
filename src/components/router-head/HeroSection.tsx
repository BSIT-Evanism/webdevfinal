import { component$, useStore } from "@builder.io/qwik";
import Image from "../../images/webdev.png?jsx";
import Image2 from "../../images/Facebook.png?jsx";
import Image3 from "../../images/CircledEnvelope.png?jsx";
import { QwikLottie } from "qwik-lottie";
import { LottieAnim } from "../LottieAnim";
import { MarqueeSlider } from "~/integrations/react/MarqueeSlider";

export const HeroSection = component$(() => {
  const store = useStore({
    options: {
      path: "https://lottie.host/1e21b93a-43dc-4bac-abea-766e31c834a7/gZGKAvIabQ.json",
    },
  });

  return (
    <div class="flex h-screen w-screen flex-col items-center justify-center p-4">
      <div class="h-[50%] w-full">
        <Image class="absolute" />
        <svg
          width="1400"
          height="490"
          viewBox="0 0 1400 490"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-full object-fill"
        >
          <rect y="110" width="490" height="380" rx="30" fill="#BC7AF9" />
          <path
            d="M110 30C110 13.4314 123.431 0 140 0H1370C1386.57 0 1400 13.4315 1400 30V460C1400 476.569 1386.57 490 1370 490H140C123.431 490 110 476.569 110 460V30Z"
            fill="#BC7AF9"
          />
          <rect x="80" y="80" width="30" height="30" fill="#BC7AF9" />
          <circle cx="75" cy="75" r="35" fill="white" />
        </svg>
        <svg
          width="423"
          height="198"
          viewBox="0 0 423 198"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-10 top-52"
        >
          <path
            d="M11.4219 72.1719C11.4219 68.9219 11.375 65.375 11.2812 61.5312C11.1875 57.6562 11.125 55.1094 11.0938 53.8906C10.8438 45.7656 10.7188 39.6562 10.7188 35.5625C10.7188 29.5312 10.875 24.375 11.1875 20.0938L4.95312 19.1094C4.54688 17.4219 4.26562 16 4.10938 14.8438C3.92188 13.6875 3.82812 12.4219 3.82812 11.0469V9.96875C4.48438 9.15625 5.53125 8.3125 6.96875 7.4375C8.4375 6.5625 10.1406 5.82813 12.0781 5.23438C14.0469 4.64062 16.0312 4.34375 18.0312 4.34375C21.7188 4.34375 24.6562 5.10937 26.8438 6.64062C29.0312 8.17188 30.125 10.5625 30.125 13.8125C30.125 20.625 29.75 32 29 47.9375L31.9062 47.2812C33.875 43.75 36.0625 39.1094 38.4688 33.3594C40.9062 27.6094 42.5 23.1562 43.25 20L37.4375 19.0156C37.0312 17.3281 36.7344 15.9062 36.5469 14.75C36.3906 13.5937 36.3125 12.3281 36.3125 10.9531V9.875C36.9375 9.09375 38.0469 8.26563 39.6406 7.39062C41.2656 6.48438 43.125 5.73438 45.2188 5.14062C47.3125 4.54687 49.375 4.25 51.4062 4.25C53.625 4.25 55.6406 4.625 57.4531 5.375C59.2656 6.125 60.7031 7.28125 61.7656 8.84375C62.8594 10.4062 63.4062 12.3281 63.4062 14.6094C63.4062 18.5469 61.7344 23.2812 58.3906 28.8125C55.0781 34.3438 51.0938 39.8906 46.4375 45.4531C47.9688 48.6406 49.6094 51.6406 51.3594 54.4531C53.1094 57.2656 54.6562 59.3906 56 60.8281C56.6875 60.4844 57.3281 60.0312 57.9219 59.4688C58.5469 58.9062 59.3438 58.0938 60.3125 57.0312L61.3438 55.9531L67.1094 60.3125V61.3438C67.1094 66.3125 65.8594 70.3125 63.3594 73.3438C60.8906 76.375 57.1406 77.8906 52.1094 77.8906C50.2344 77.8906 48.4531 77.625 46.7656 77.0938C44.4219 76.375 42.3906 74.9531 40.6719 72.8281C38.9844 70.7031 37.6406 68.25 36.6406 65.4688C35.6719 62.6562 35 59.7656 34.625 56.7969C33.0625 57.1719 31.0156 57.4375 28.4844 57.5938C28.2031 62.9375 27.8438 69.0469 27.4062 75.9219C24.875 77.2969 22.0625 77.9844 18.9688 77.9844C16.2812 77.9844 13.75 77.5 11.375 76.5312L11.4219 72.1719ZM71.8906 9.73438C71.8906 6.98437 72.7812 4.75 74.5625 3.03125C76.375 1.3125 79.25 0.453125 83.1875 0.453125C87.125 0.453125 89.9844 1.3125 91.7656 3.03125C93.5781 4.75 94.4844 6.98437 94.4844 9.73438C94.4844 11.2969 93.9375 12.7344 92.8438 14.0469C91.7812 15.3594 90.375 16.4062 88.625 17.1875C86.875 17.9375 85.0625 18.3125 83.1875 18.3125C81.1562 18.3125 79.2656 17.875 77.5156 17C75.7969 16.0938 74.4219 14.9688 73.3906 13.625C72.3906 12.2812 71.8906 10.9844 71.8906 9.73438ZM69.5938 36.5469C69.1875 35.0156 68.9062 33.625 68.75 32.375C68.5938 31.0938 68.5156 29.7656 68.5156 28.3906L68.5625 27.0781C69.2188 26.2344 70.2344 25.3906 71.6094 24.5469C73.0156 23.6719 74.6406 22.9375 76.4844 22.3438C78.3594 21.75 80.2969 21.4531 82.2969 21.4531C86.6719 21.4531 89.7812 22.4375 91.625 24.4062C93.4688 26.375 94.3906 29.4375 94.3906 33.5938C94.3906 36.0938 94.0312 39.3594 93.3125 43.3906C92.625 47.4219 91.7812 51.3438 90.7812 55.1562C89.8125 58.9375 88.9688 61.6406 88.25 63.2656L88.3438 63.3594L95.2812 60.8281C96.5312 61.8906 97.4688 63.0625 98.0938 64.3438C98.75 65.625 99.1719 67.1094 99.3594 68.7969C99.3594 69.0156 98.6719 69.9219 97.2969 71.5156C95.9219 73.0781 94.0938 74.5469 91.8125 75.9219C89.5625 77.2656 86.9531 77.9375 83.9844 77.9375C80.9844 77.9375 78.5469 77.125 76.6719 75.5C74.8281 73.875 73.9062 71.0938 73.9062 67.1562C73.9062 62.5625 74.0312 57.6875 74.2812 52.5312C74.5312 47.375 74.9219 42.375 75.4531 37.5312L69.5938 36.5469ZM103.016 49.7656C103.016 44.3594 103.922 39.5312 105.734 35.2812C107.547 31.0312 110.344 27.6719 114.125 25.2031C117.938 22.7031 122.688 21.4531 128.375 21.4531C130.312 21.4531 132.531 21.5781 135.031 21.8281C137.562 22.0469 139.984 22.3906 142.297 22.8594L143.234 23.5156C144.641 24.4844 145.672 25.2656 146.328 25.8594C147.016 26.4219 147.734 27.2188 148.484 28.25C148.484 29.9375 148.25 32.2656 147.781 35.2344C147.344 38.1719 146.781 40.9062 146.094 43.4375C145.406 45.9688 144.75 47.5938 144.125 48.3125C143.094 48.8438 141.422 49.1094 139.109 49.1094C137.984 49.1094 136.922 49.0312 135.922 48.875C134.953 48.6875 134.219 48.4531 133.719 48.1719L132.734 39.5C132.266 38.9688 131.188 38.5469 129.5 38.2344C127.844 37.8906 126.312 37.7188 124.906 37.7188C124.469 37.7188 124.062 37.75 123.688 37.8125C122.969 39.2812 122.422 41.1562 122.047 43.4375C121.672 45.7188 121.484 48.0469 121.484 50.4219C121.484 53.8594 122.047 56.7812 123.172 59.1875C124.297 61.5625 126.594 62.75 130.062 62.75C131.781 62.75 133.469 62.4688 135.125 61.9062C136.812 61.3438 138.938 60.4844 141.5 59.3281C142.562 58.8281 143.359 58.4688 143.891 58.25C145.141 59.5 146.125 60.8125 146.844 62.1875C147.562 63.5625 148.031 65.3281 148.25 67.4844C146.25 69.8281 143.438 72.1562 139.812 74.4688C136.219 76.7812 132.016 77.9375 127.203 77.9375C122.078 77.9375 117.688 76.7031 114.031 74.2344C110.406 71.7344 107.656 68.3594 105.781 64.1094C103.938 59.8281 103.016 55.0469 103.016 49.7656ZM156.828 46.7188C156.828 32.0938 157.109 22.0625 157.672 16.625L152.375 15.6875C151.625 12.8125 151.25 9.71875 151.25 6.40625C151.719 5.8125 152.594 5.07813 153.875 4.20312C155.156 3.32812 156.641 2.5625 158.328 1.90625C160.047 1.25 161.75 0.921875 163.438 0.921875C167.625 0.921875 170.875 1.82812 173.188 3.64062C175.531 5.45313 176.703 8.54688 176.703 12.9219C176.703 15.1094 176.547 18.4688 176.234 23C175.922 27.5 175.344 32.9688 174.5 39.4062C173.656 45.8438 172.531 52.5625 171.125 59.5625L171.922 60.0312C174.391 56.625 176.766 52.875 179.047 48.7812C181.328 44.6562 183.141 40.8281 184.484 37.2969L180.453 36.3125C180.078 34.1875 179.891 31.6719 179.891 28.7656V27.0781C181.078 25.5781 182.703 24.2656 184.766 23.1406C186.859 22.0156 189.453 21.4531 192.547 21.4531C194.766 21.4531 196.688 21.875 198.312 22.7188C199.938 23.5312 201.188 24.6719 202.062 26.1406C202.938 27.6094 203.375 29.2969 203.375 31.2031C203.375 32.6406 203.156 34 202.719 35.2812C202.281 36.5312 201.625 37.8594 200.75 39.2656C198.5 42.8281 194.578 47.8906 188.984 54.4531C190.859 57.0781 192.688 59.3594 194.469 61.2969C195.156 60.9531 195.797 60.5 196.391 59.9375C197.016 59.375 197.812 58.5625 198.781 57.5L199.812 56.4219L205.578 60.7812C205.359 66.3438 204.156 70.5938 201.969 73.5312C199.812 76.4375 196.953 77.8906 193.391 77.8906C189.484 77.8906 186.547 76.7031 184.578 74.3281C182.609 71.9531 181.172 68.5938 180.266 64.25C176.828 67.9688 173.797 71.0938 171.172 73.625C168.578 76.125 166.875 77.5625 166.062 77.9375C164.344 77.9375 162.703 77.7344 161.141 77.3281C159.578 76.9219 158.422 76.2812 157.672 75.4062C157.328 70.9688 157.094 66.5781 156.969 62.2344C156.875 57.8594 156.828 52.6875 156.828 46.7188ZM22.5781 186.406C21.4219 182.562 19.7344 177.344 17.5156 170.75C15.2969 164.156 13.1094 158.031 10.9531 152.375C8.82812 146.719 7.26562 143.203 6.26562 141.828L2.1875 141.5C1.03125 138.031 0.453125 135.109 0.453125 132.734C1.54688 130.016 3.1875 127.953 5.375 126.547C7.5625 125.109 10.2188 124.391 13.3438 124.391C18.1562 124.391 21.7812 126.484 24.2188 130.672C25.75 133.297 27.0469 136.594 28.1094 140.562C29.2031 144.5 30.2656 149.25 31.2969 154.812C33.3281 165.406 34.5781 174.203 35.0469 181.203L36.125 181.016C36.9375 179.234 37.9688 175.609 39.2188 170.141C40.4688 164.672 41.5469 159.031 42.4531 153.219C43.3594 147.375 43.8125 142.984 43.8125 140.047L37.625 139.156C37.1875 137.594 36.875 136.234 36.6875 135.078C36.5 133.891 36.3906 132.609 36.3594 131.234C36.3594 131.109 36.3594 130.938 36.3594 130.719C36.3906 130.5 36.3906 130.234 36.3594 129.922C37.0469 129.109 38.1875 128.266 39.7812 127.391C41.375 126.516 43.2188 125.781 45.3125 125.188C47.4375 124.594 49.5625 124.297 51.6875 124.297C55.9688 124.297 59.1094 125.359 61.1094 127.484C63.1094 129.578 64.1094 132.797 64.1094 137.141C64.1094 140.141 63.7031 143.703 62.8906 147.828C62.0781 151.953 60.9375 156.219 59.4688 160.625C58.4062 163.812 56.8125 167.797 54.6875 172.578C52.5625 177.328 50.2812 181.891 47.8438 186.266C45.4375 190.641 43.2656 193.938 41.3281 196.156C40.4219 196.75 39.3281 197.188 38.0469 197.469C36.7656 197.781 35.4844 197.938 34.2031 197.938C32.4219 197.938 30.5938 197.688 28.7188 197.188C26.875 196.719 25.2344 196.047 23.7969 195.172C22.3906 194.297 21.4062 193.297 20.8438 192.172L22.5781 186.406ZM68.2344 169.766C68.2344 164.359 69.1406 159.531 70.9531 155.281C72.7656 151.031 75.5625 147.672 79.3438 145.203C83.1562 142.703 87.9062 141.453 93.5938 141.453C96.5625 141.453 99.5312 141.812 102.5 142.531C105.469 143.219 107.984 144.375 110.047 146C111.953 147.531 113.328 149.562 114.172 152.094C115.047 154.594 115.484 157.375 115.484 160.438C115.484 162.469 115.312 164.547 114.969 166.672C114.594 167.297 113.859 168.125 112.766 169.156C111.672 170.156 110.391 171.141 108.922 172.109C107.453 173.078 106.031 173.828 104.656 174.359C103.344 174.453 101.984 174.5 100.578 174.5C98.1094 174.5 95.6094 174.391 93.0781 174.172C90.5469 173.953 88.3281 173.703 86.4219 173.422C86.6719 176.078 87.4844 178.391 88.8594 180.359C90.2344 182.328 92.4219 183.312 95.4219 183.312C95.7031 183.312 96.1562 183.281 96.7812 183.219C98.6875 183.031 100.906 182.531 103.438 181.719C106 180.875 108.547 179.906 111.078 178.812C112.266 180 113.141 181.188 113.703 182.375C114.266 183.562 114.656 185.266 114.875 187.484C113.906 188.609 112.328 189.984 110.141 191.609C107.984 193.234 105.344 194.703 102.219 196.016C99.0938 197.297 95.8281 197.938 92.4219 197.938C87.2969 197.938 82.9062 196.703 79.25 194.234C75.625 191.734 72.875 188.359 71 184.109C69.1562 179.828 68.2344 175.047 68.2344 169.766ZM98.4219 158.984C97.9844 158.516 97.25 158.156 96.2188 157.906C95.1875 157.625 94.1094 157.484 92.9844 157.484C92.0781 157.484 91.1562 157.562 90.2188 157.719C89.3125 157.875 88.7656 158.047 88.5781 158.234C87.5156 160.328 86.8438 162.703 86.5625 165.359L99.0781 164.141L98.4219 158.984ZM126.172 180.688C126.172 175.594 126.234 171.75 126.359 169.156C126.484 166.531 126.812 162.688 127.344 157.625L121.906 156.922C121.25 154.891 120.812 153.078 120.594 151.484C120.406 149.891 120.312 147.828 120.312 145.297C120.812 144.859 121.641 144.344 122.797 143.75C123.984 143.125 125.391 142.594 127.016 142.156C128.641 141.688 130.281 141.453 131.938 141.453C135.719 141.453 138.391 142.266 139.953 143.891C141.547 145.516 142.344 147.953 142.344 151.203C142.344 153.016 142.078 155.469 141.547 158.562C140.672 163.531 140.234 166.141 140.234 166.391C140.234 166.547 140.344 166.703 140.562 166.859C140.781 166.984 141.016 167.047 141.266 167.047C141.547 167.047 141.734 166.938 141.828 166.719C143.078 161.75 144.328 157.594 145.578 154.25C146.828 150.906 148.719 147.938 151.25 145.344C153.781 142.75 157.062 141.453 161.094 141.453C166.094 141.453 169.688 142.984 171.875 146.047C174.062 149.078 175.156 152.906 175.156 157.531C175.156 161.656 174.672 165.641 173.703 169.484C172.734 173.297 171.531 177.281 170.094 181.438C170.156 181.281 169.938 181.891 169.438 183.266L169.531 183.359L176.375 180.547C178.812 182.641 180.234 185.422 180.641 188.891C180.641 189.109 179.938 190 178.531 191.562C177.156 193.125 175.328 194.578 173.047 195.922C170.766 197.266 168.141 197.938 165.172 197.938C162.203 197.938 159.781 197.141 157.906 195.547C156.031 193.953 155.094 191.234 155.094 187.391C155.094 184.328 155.219 180.234 155.469 175.109C155.719 169.984 155.969 165.859 156.219 162.734C155.406 161.859 154.406 161.391 153.219 161.328C152.125 162.734 150.516 165.547 148.391 169.766C146.266 173.984 144.766 177.141 143.891 179.234C143.828 179.672 143.797 180.094 143.797 180.5C143.797 182.062 144.031 184.172 144.5 186.828C144.969 189.453 145.547 191.906 146.234 194.188C145.672 195.25 144.516 196.141 142.766 196.859C141.016 197.578 138.859 197.938 136.297 197.938C133.984 197.938 132.125 197.75 130.719 197.375C129.344 197 128.375 196.609 127.812 196.203C127.25 195.766 126.969 195.5 126.969 195.406C126.938 195.125 126.859 194.391 126.734 193.203C126.609 191.984 126.484 190.297 126.359 188.141C126.234 185.953 126.172 183.469 126.172 180.688ZM188.047 171.125C188.047 166.031 188.125 161.391 188.281 157.203L183.172 156.312C182.766 154.75 182.484 153.375 182.328 152.188C182.172 151 182.094 149.734 182.094 148.391L182.188 147.453C182.281 147.016 182.328 146.656 182.328 146.375L189.125 144.875C189.281 142.938 189.641 140.75 190.203 138.312C190.766 135.875 191.359 134.078 191.984 132.922C192.984 132.172 194.188 131.609 195.594 131.234C197 130.859 198.516 130.672 200.141 130.672C201.516 130.672 202.844 130.812 204.125 131.094C205.438 131.344 206.578 131.688 207.547 132.125C207.641 133.188 207.688 134.406 207.688 135.781C207.688 138.031 207.578 140.578 207.359 143.422L215.609 141.922C216.766 143.922 217.344 146.094 217.344 148.438C217.344 150.062 217.141 151.531 216.734 152.844C216.359 154.156 215.828 155.641 215.141 157.297C213.078 157.641 210.25 157.859 206.656 157.953C206.219 163.047 205.25 170.531 203.75 180.406L203.516 182L203.609 182.094L214.625 178.672C216.906 180.578 218.297 183.516 218.797 187.484C218.797 187.703 217.781 188.734 215.75 190.578C213.75 192.391 211.234 194.078 208.203 195.641C205.172 197.172 201.875 197.938 198.312 197.938C192.094 197.938 188.781 194.141 188.375 186.547C188.156 182.703 188.047 177.562 188.047 171.125ZM221.562 156.594C221.031 154.312 220.688 152.641 220.531 151.578C220.375 150.516 220.297 148.906 220.297 146.75C222.141 145 224.125 143.688 226.25 142.812C228.375 141.906 230.766 141.453 233.422 141.453C241.484 141.453 245.516 145.5 245.516 153.594C245.516 155.75 245.312 158.25 244.906 161.094C244.531 163.938 243.984 167.516 243.266 171.828C243.172 172.391 242.922 173.906 242.516 176.375C242.109 178.844 241.828 180.906 241.672 182.562C242.203 183.125 242.859 183.516 243.641 183.734C244.016 183.734 244.875 182.969 246.219 181.438C247.594 179.875 249.062 177.984 250.625 175.766C252.188 173.547 253.469 171.5 254.469 169.625C254.719 165.156 255.062 161.047 255.5 157.297L250.578 156.312C250.172 154.75 249.891 153.375 249.734 152.188C249.578 151 249.5 149.734 249.5 148.391L249.547 147.078C250.672 145.641 252.359 144.344 254.609 143.188C256.859 142.031 259.438 141.453 262.344 141.453C270.406 141.453 274.438 145.5 274.438 153.594C274.438 156.875 273.891 161.203 272.797 166.578C271.703 171.922 270.422 177.328 268.953 182.797L274.344 180.453C275.25 181.422 276.047 182.609 276.734 184.016C277.453 185.391 277.906 186.984 278.094 188.797C277.656 189.734 276.703 190.938 275.234 192.406C273.766 193.844 271.969 195.125 269.844 196.25C267.719 197.375 265.5 197.938 263.188 197.938C260.594 197.938 258.594 197.172 257.188 195.641C255.812 194.078 255.125 192.094 255.125 189.688C255.125 189.062 255.281 187.781 255.594 185.844C255.938 183.906 256.219 182.562 256.438 181.812L255.125 181.391C253.562 186.859 251.406 190.984 248.656 193.766C245.938 196.547 242.828 197.938 239.328 197.938C234.297 197.938 230.75 196.281 228.688 192.969C226.625 189.625 225.594 185.484 225.594 180.547C225.594 171.266 225.906 163.516 226.531 157.297L221.562 156.594ZM286.766 184.438C286.766 183.094 286.797 179.797 286.859 174.547C286.953 164.234 287 158.594 287 157.625L282.688 156.922C282.094 155.141 281.672 153.469 281.422 151.906C281.172 150.344 281.047 148.766 281.047 147.172C281.047 146.516 281.062 146.016 281.094 145.672C281.625 145.203 282.453 144.641 283.578 143.984C284.703 143.328 286.031 142.75 287.562 142.25C289.094 141.719 290.656 141.453 292.25 141.453C295.969 141.453 298.656 142.281 300.312 143.938C302 145.594 302.844 148.016 302.844 151.203C302.844 153.141 302.594 155.625 302.094 158.656C301.625 161.656 301.141 163.797 300.641 165.078L302.328 165.359L305.141 154.766C306.391 149.984 307.953 146.578 309.828 144.547C311.703 142.484 313.812 141.453 316.156 141.453C317.688 141.453 319.203 141.688 320.703 142.156C322.234 142.625 323.406 143.203 324.219 143.891C325.094 145.828 325.531 148.406 325.531 151.625C325.531 153.875 325.312 156.109 324.875 158.328C324.438 160.516 323.875 162.281 323.188 163.625L313.344 162.312C311.344 164.438 309.219 167.391 306.969 171.172C304.719 174.922 302.922 178.375 301.578 181.531L301.531 183.969L310.625 181.812C312.156 184.156 313.047 186.938 313.297 190.156C313.297 190.344 312.594 191.109 311.188 192.453C309.781 193.797 307.922 195.047 305.609 196.203C303.328 197.328 300.703 197.891 297.734 197.891C294.672 197.891 292.109 197.078 290.047 195.453C288.016 193.797 286.938 191.016 286.812 187.109C286.781 186.641 286.766 185.75 286.766 184.438ZM328.953 169.766C328.953 164.359 329.859 159.531 331.672 155.281C333.484 151.031 336.281 147.672 340.062 145.203C343.875 142.703 348.625 141.453 354.312 141.453C357.281 141.453 360.25 141.812 363.219 142.531C366.188 143.219 368.703 144.375 370.766 146C372.672 147.531 374.047 149.562 374.891 152.094C375.766 154.594 376.203 157.375 376.203 160.438C376.203 162.469 376.031 164.547 375.688 166.672C375.312 167.297 374.578 168.125 373.484 169.156C372.391 170.156 371.109 171.141 369.641 172.109C368.172 173.078 366.75 173.828 365.375 174.359C364.062 174.453 362.703 174.5 361.297 174.5C358.828 174.5 356.328 174.391 353.797 174.172C351.266 173.953 349.047 173.703 347.141 173.422C347.391 176.078 348.203 178.391 349.578 180.359C350.953 182.328 353.141 183.312 356.141 183.312C356.422 183.312 356.875 183.281 357.5 183.219C359.406 183.031 361.625 182.531 364.156 181.719C366.719 180.875 369.266 179.906 371.797 178.812C372.984 180 373.859 181.188 374.422 182.375C374.984 183.562 375.375 185.266 375.594 187.484C374.625 188.609 373.047 189.984 370.859 191.609C368.703 193.234 366.062 194.703 362.938 196.016C359.812 197.297 356.547 197.938 353.141 197.938C348.016 197.938 343.625 196.703 339.969 194.234C336.344 191.734 333.594 188.359 331.719 184.109C329.875 179.828 328.953 175.047 328.953 169.766ZM359.141 158.984C358.703 158.516 357.969 158.156 356.938 157.906C355.906 157.625 354.828 157.484 353.703 157.484C352.797 157.484 351.875 157.562 350.938 157.719C350.031 157.875 349.484 158.047 349.297 158.234C348.234 160.328 347.562 162.703 347.281 165.359L359.797 164.141L359.141 158.984ZM386.891 180.453C389.641 181.547 391.844 182.391 393.5 182.984C395.156 183.578 396.969 184.094 398.938 184.531C400.938 184.969 402.922 185.188 404.891 185.188C405.766 185.188 406.391 185.109 406.766 184.953C406.859 184.828 406.938 184.641 407 184.391C407.094 184.109 407.141 183.828 407.141 183.547C407.141 182.922 406.781 182.406 406.062 182C404.938 181.375 402.938 180.391 400.062 179.047C396.125 177.172 393 175.5 390.688 174.031C388.406 172.562 386.469 170.609 384.875 168.172C383.312 165.734 382.531 162.672 382.531 158.984C382.531 153.703 384.109 149.469 387.266 146.281C390.422 143.062 395.422 141.453 402.266 141.453C410.422 141.453 416.766 142.516 421.297 144.641C421.516 145.547 421.625 146.688 421.625 148.062C421.625 150.688 421.219 153.375 420.406 156.125C419.594 158.844 418.531 160.859 417.219 162.172C415.438 161.578 412.922 160.625 409.672 159.312C407.297 158.375 405.406 157.656 404 157.156C402.625 156.625 401.359 156.25 400.203 156.031C399.578 156.188 399.078 156.562 398.703 157.156C398.328 157.719 398.141 158.391 398.141 159.172C398.141 159.859 398.344 160.438 398.75 160.906C399.156 161.375 399.609 161.75 400.109 162.031C400.641 162.281 401.391 162.625 402.359 163.062C402.859 163.281 403.328 163.484 403.766 163.672C404.203 163.828 404.609 163.984 404.984 164.141C407.422 165.172 409.344 166.016 410.75 166.672C412.156 167.328 413.516 168.109 414.828 169.016C417.234 170.672 419.125 172.562 420.5 174.688C421.875 176.812 422.562 179.141 422.562 181.672C422.562 185.172 421.562 188.203 419.562 190.766C417.594 193.297 415.062 195.141 411.969 196.297C410.344 196.891 408.562 197.312 406.625 197.562C404.719 197.844 402.484 197.984 399.922 197.984C396.891 197.984 393.766 197.406 390.547 196.25C387.359 195.062 384.922 193.094 383.234 190.344C383.266 188.438 383.516 186.781 383.984 185.375C384.484 183.938 385.453 182.297 386.891 180.453Z"
            fill="white"
          />
        </svg>
        <LottieAnim />
      </div>
      <div class="h-[50%] w-full p-4">
        <div class="flex justify-evenly">
          <h1 class="text-5xl font-semibold">
            Step into style with our collection of shoes!
          </h1>
          <Image2 />
          <Image3 />
        </div>
      </div>
      <MarqueeSlider>
        <div class="flex gap-10">
          <h1 class="font-bold uppercase">FOR PRE ORDER NOW</h1>
          <h1 class="font-bold uppercase">ADIDAS SAMBA GREEN 💚</h1>
          <h1 class="font-bold uppercase">
            PHP 6800 ( BELOW MARKET PRICE ❌ )
          </h1>
          <h1 class="font-bold uppercase">PHP 1000 DOWNPAYMENT TO PROCEED</h1>
        </div>
      </MarqueeSlider>
    </div>
  );
});
