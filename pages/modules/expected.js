import Image from "next/image";

export const Expected = ({ text }) => {
  return (
    <a href='https://www.otbelivanie.me' target="_top">
      <div className="grid text-black bg-white rounded-3xl px-5 py-2.5 text-center">
        <p>Ожидаем поступление новинок</p>
        <div className="text-left space-y-4">
          <div className="flex flex-row space-x-2">
            <Image src="http://taplink.st/p/b/6/9/a/29544012.jpg"
              alt="crest"
              width={65}
              height={72}
            />
            <div>
              <div className="font-medium">3D PRO HEALTH</div>
              <div>🇺🇸CREST</div>
              <div>990₽</div>
            </div>
          </div>
          <div className="flex flex-row space-x-2">
            <Image src="http://taplink.st/p/5/b/c/a/29544054.jpg"
              alt="crest"
              width={65}
              height={72}
            />
            <div>
              <div className="font-medium">3D WHITE GLAMOROUS</div>
              <div>🇺🇸CREST</div>
              <div>990₽</div>
            </div>
          </div>
          <div className="flex flex-row space-x-2">
            <Image src="http://taplink.st/p/4/5/0/5/29544882.jpg"
              alt="crest"
              width={65}
              height={72}
            />
            <div>
              <div className="font-medium">3D NOTICEABLY</div>
              <div>🇺🇸CREST</div>
              <div>3590₽</div>
            </div>
          </div>
          <div className="flex flex-row space-x-2">
            <Image src="http://taplink.st/p/9/e/4/c/29544939.png"
              alt="crest"
              width={65}
              height={72}
            />
            <div>
              <div className="font-medium">SUPREME PROFESSIONAL</div>
              <div>🇺🇸CREST</div>
              <div>7990₽</div>
            </div>
          </div>
        </div>

      </div>
    </a>
  );
};

export default Expected;