import Link from "../components/link";

const LINKS = [
  {
    id: "Vkontakte",
    icon: "M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 15.001953 18 L 10.966797 18.001953 C 10.966797 18.001953 10.735897 17.988941 10.457031 18.025391 C 10.178165 18.061841 9.7661948 18.078761 9.34375 18.556641 L 9.3417969 18.558594 L 9.3398438 18.560547 C 8.9640794 18.990267 8.9784173 19.490413 9.0253906 19.765625 C 9.0721906 20.039824 9.1769621 20.244579 9.1777344 20.246094 L 9.1777344 20.248047 C 9.2165294 20.343227 12.146379 27.521928 15.839844 31.378906 C 18.445099 34.101283 21.231404 35 23.712891 35 L 25 35 C 25.42346 35 25.801654 34.98073 26.220703 34.763672 C 26.639753 34.546613 27 33.94757 27 33.482422 C 27 32.981247 27.012312 32.495404 27.076172 32.224609 C 27.135819 31.971721 27.112802 32.033791 27.136719 32.033203 C 27.160692 32.038405 27.204328 32.048513 27.287109 32.085938 C 27.465502 32.166587 27.741146 32.346633 28.046875 32.583984 C 28.657377 33.057945 29.380504 33.745554 30.191406 34.277344 C 31.352856 35.04712 32.613281 35 32.613281 35 L 36.769531 35 L 36.814453 34.996094 C 36.814453 34.996094 37.452209 34.981594 38.107422 34.580078 C 38.435028 34.379319 38.82436 34.011034 38.955078 33.458984 C 39.085796 32.906935 38.918888 32.327748 38.597656 31.818359 C 38.480305 31.631523 37.910631 30.80588 35.636719 28.787109 C 35.049256 28.26609 34.648638 27.897278 34.490234 27.701172 C 34.433996 27.631548 34.42928 27.638269 34.417969 27.634766 C 34.431219 27.600573 34.5626 27.32391 34.914062 26.867188 C 35.280366 26.391181 35.836997 25.727944 36.552734 24.816406 C 37.464977 23.654213 38.105035 22.536703 38.507812 21.59375 C 38.709203 21.122274 38.851959 20.694455 38.9375 20.306641 C 39.02304 19.918826 39.091299 19.59647 38.964844 19.136719 C 38.870524 18.794484 38.614371 18.487968 38.363281 18.326172 C 38.112191 18.164376 37.878094 18.103431 37.667969 18.064453 C 37.247723 17.986493 36.876935 18 36.53125 18 C 35.80744 18 32.589808 18.025391 32.324219 18.025391 C 32.012508 18.025391 31.515256 18.155199 31.285156 18.287109 C 30.713891 18.614265 30.535156 19.0625 30.535156 19.0625 L 30.480469 19.158203 L 30.449219 19.265625 C 30.449219 19.265625 29.716532 21.635827 28.962891 22.857422 L 28.960938 22.857422 C 28.074746 24.296534 27.41371 24.867373 27.123047 25.029297 C 27.092172 25.046497 27.109277 25.03736 27.087891 25.048828 C 27.065156 24.982615 27.036471 24.891447 27.017578 24.722656 C 26.975067 24.342427 27 23.806967 27 23.289062 C 27 21.854646 27.107725 20.960184 26.988281 20.113281 C 26.928559 19.68983 26.776516 19.21826 26.429688 18.855469 C 26.082858 18.492678 25.634863 18.3141 25.1875 18.210938 L 25.185547 18.210938 C 24.719313 18.10357 24.216872 18.011359 23.009766 18 C 21.471766 17.98566 20.470116 18.03334 19.580078 18.429688 L 19.570312 18.435547 L 19.5625 18.439453 C 19.210828 18.604643 18.933601 18.793991 18.689453 19.046875 C 18.567379 19.173317 18.422556 19.265395 18.322266 19.667969 C 18.272116 19.869256 18.266616 20.250091 18.494141 20.558594 C 18.721663 20.867097 19.040516 20.960144 19.228516 20.984375 C 19.193836 20.979875 19.376419 21.020055 19.517578 21.089844 C 19.658738 21.159634 19.781301 21.26012 19.8125 21.300781 L 19.8125 21.302734 C 19.79945 21.285784 19.935003 21.622642 19.970703 21.929688 C 20.006403 22.236732 20 22.484375 20 22.484375 L 19.998047 22.544922 L 20.003906 22.605469 C 20.003906 22.605469 20.065293 23.284928 20.033203 23.986328 C 20.017153 24.337028 19.972824 24.690015 19.914062 24.90625 C 19.910955 24.917687 19.909535 24.913678 19.90625 24.923828 C 19.655877 24.748968 19.078554 24.13969 18.283203 22.826172 C 17.547974 21.611109 16.859375 19.425781 16.859375 19.425781 L 16.84375 19.376953 L 16.826172 19.330078 C 16.826172 19.330078 16.697788 18.841896 16.130859 18.443359 C 15.59948 18.069284 15.09375 18.017578 15.09375 18.017578 L 15.001953 18 z M 14.769531 20 C 14.826731 20.02091 14.946311 20.063999 14.96875 20.074219 L 14.945312 20.003906 C 14.945312 20.003906 14.976103 20.074602 14.976562 20.076172 C 14.976816 20.076308 14.980369 20.078025 14.980469 20.078125 L 14.980469 20.080078 L 14.982422 20.080078 C 14.932162 20.044918 14.974769 20.079819 14.980469 20.087891 C 15.008089 20.182121 15.618693 22.285424 16.572266 23.861328 C 17.440943 25.295947 18.08272 26.099662 18.783203 26.580078 C 19.483009 27.060029 20.424029 27.010564 20.902344 26.761719 C 21.541579 26.429749 21.720259 25.88414 21.84375 25.429688 C 21.967241 24.975234 22.011297 24.514175 22.03125 24.078125 C 22.06932 23.246137 22.004207 22.565534 21.998047 22.498047 C 21.999047 22.460457 22.007951 22.135402 21.957031 21.697266 C 21.905701 21.255789 21.813696 20.707151 21.421875 20.15625 C 21.860763 20.09104 22.104431 19.991744 22.990234 20 C 24.119875 20.01063 24.291711 20.05776 24.736328 20.160156 C 24.978465 20.215996 25.005345 20.262255 24.982422 20.238281 C 24.959502 20.214301 24.980423 20.198281 25.007812 20.392578 C 25.062629 20.781082 25 21.777479 25 23.289062 C 25 23.715159 24.958857 24.316046 25.029297 24.945312 C 25.099687 25.574186 25.296238 26.378841 26.056641 26.849609 C 26.489901 27.117751 27.317569 27.209968 28.097656 26.775391 C 28.877743 26.340815 29.678254 25.507138 30.664062 23.90625 C 31.637852 22.327814 32.220192 20.252559 32.283203 20.033203 C 32.283203 20.033203 32.294311 20.025979 32.300781 20.021484 C 32.318451 20.022334 32.29597 20.025391 32.324219 20.025391 C 32.69463 20.025391 35.85506 20 36.53125 20 C 36.717284 20 36.798956 20.010015 36.9375 20.015625 C 36.88151 20.23153 36.806235 20.482942 36.667969 20.806641 C 36.342997 21.567438 35.785273 22.554225 34.978516 23.582031 C 34.283253 24.467494 33.743119 25.109741 33.330078 25.646484 C 32.917037 26.183228 32.592563 26.606593 32.457031 27.21875 C 32.3215 27.830907 32.580091 28.521341 32.933594 28.958984 C 33.287097 29.396628 33.724557 29.765223 34.308594 30.283203 C 36.508681 32.236432 36.869649 32.827649 36.904297 32.882812 L 36.904297 32.884766 C 36.941447 32.943676 36.917361 32.88443 36.931641 32.914062 C 36.806889 32.952953 36.658409 32.99693 36.644531 33 L 32.597656 33 L 32.591797 33 C 32.591797 33 31.847477 32.9756 31.294922 32.609375 L 31.292969 32.607422 L 31.291016 32.607422 C 30.706463 32.224555 29.99998 31.567954 29.273438 31.003906 C 28.910166 30.721882 28.540311 30.457615 28.111328 30.263672 C 27.682345 30.069729 27.138651 29.932231 26.566406 30.103516 C 25.73815 30.351416 25.278492 31.139669 25.130859 31.765625 C 25.024881 32.214969 25.040549 32.605726 25.037109 32.998047 C 25.008582 32.999549 25.033273 33 25 33 L 23.712891 33 C 21.680377 33 19.565895 32.379527 17.285156 29.996094 C 14.319982 26.899649 11.674463 20.911604 11.277344 20.001953 L 14.769531 20 z M 32.212891 20.007812 C 32.194741 20.011856 32.246666 20.015777 32.289062 20.019531 C 32.283325 20.022641 32.289551 20.016779 32.28125 20.021484 C 32.28041 20.004775 32.237287 20.002377 32.212891 20.007812 z",
    params:
      "flex text-white h-16 bg-[#0077FF] hover:bg-[#0077FF]/70 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 rounded-3xl text-sm px-5 py-2.5 text-center items-center dark:focus:ring-[#3b5998]/55",
    text: "-10% за подписку ВКонтакте",
    url: "https://vk.com/otbelivanie.store",
  },
  {
    id: "Telegram",
    icon: "M 44.376953 5.9863281 C 43.889905 6.0076957 43.415817 6.1432497 42.988281 6.3144531 C 42.565113 6.4845113 40.128883 7.5243408 36.53125 9.0625 C 32.933617 10.600659 28.256963 12.603668 23.621094 14.589844 C 14.349356 18.562196 5.2382813 22.470703 5.2382812 22.470703 L 5.3046875 22.445312 C 5.3046875 22.445312 4.7547875 22.629122 4.1972656 23.017578 C 3.9185047 23.211806 3.6186028 23.462555 3.3730469 23.828125 C 3.127491 24.193695 2.9479735 24.711788 3.015625 25.259766 C 3.2532479 27.184511 5.2480469 27.730469 5.2480469 27.730469 L 5.2558594 27.734375 L 14.158203 30.78125 C 14.385177 31.538434 16.858319 39.792923 17.402344 41.541016 C 17.702797 42.507484 17.984013 43.064995 18.277344 43.445312 C 18.424133 43.635633 18.577962 43.782915 18.748047 43.890625 C 18.815627 43.933415 18.8867 43.965525 18.957031 43.994141 C 18.958531 43.994806 18.959437 43.99348 18.960938 43.994141 C 18.969579 43.997952 18.977708 43.998295 18.986328 44.001953 L 18.962891 43.996094 C 18.979231 44.002694 18.995359 44.013801 19.011719 44.019531 C 19.043456 44.030655 19.062905 44.030268 19.103516 44.039062 C 20.123059 44.395042 20.966797 43.734375 20.966797 43.734375 L 21.001953 43.707031 L 26.470703 38.634766 L 35.345703 45.554688 L 35.457031 45.605469 C 37.010484 46.295216 38.415349 45.910403 39.193359 45.277344 C 39.97137 44.644284 40.277344 43.828125 40.277344 43.828125 L 40.310547 43.742188 L 46.832031 9.7519531 C 46.998903 8.9915162 47.022612 8.334202 46.865234 7.7402344 C 46.707857 7.1462668 46.325492 6.6299361 45.845703 6.34375 C 45.365914 6.0575639 44.864001 5.9649605 44.376953 5.9863281 z M 44.429688 8.0195312 C 44.627491 8.0103707 44.774102 8.032983 44.820312 8.0605469 C 44.866523 8.0881109 44.887272 8.0844829 44.931641 8.2519531 C 44.976011 8.419423 45.000036 8.7721605 44.878906 9.3242188 L 44.875 9.3359375 L 38.390625 43.128906 C 38.375275 43.162926 38.240151 43.475531 37.931641 43.726562 C 37.616914 43.982653 37.266874 44.182554 36.337891 43.792969 L 26.632812 36.224609 L 26.359375 36.009766 L 26.353516 36.015625 L 23.451172 33.837891 L 39.761719 14.648438 A 1.0001 1.0001 0 0 0 38.974609 13 A 1.0001 1.0001 0 0 0 38.445312 13.167969 L 14.84375 28.902344 L 5.9277344 25.849609 C 5.9277344 25.849609 5.0423771 25.356927 5 25.013672 C 4.99765 24.994652 4.9871961 25.011869 5.0332031 24.943359 C 5.0792101 24.874869 5.1948546 24.759225 5.3398438 24.658203 C 5.6298218 24.456159 5.9609375 24.333984 5.9609375 24.333984 L 5.9941406 24.322266 L 6.0273438 24.308594 C 6.0273438 24.308594 15.138894 20.399882 24.410156 16.427734 C 29.045787 14.44166 33.721617 12.440122 37.318359 10.902344 C 40.914175 9.3649615 43.512419 8.2583658 43.732422 8.1699219 C 43.982886 8.0696253 44.231884 8.0286918 44.429688 8.0195312 z M 33.613281 18.792969 L 21.244141 33.345703 L 21.238281 33.351562 A 1.0001 1.0001 0 0 0 21.183594 33.423828 A 1.0001 1.0001 0 0 0 21.128906 33.507812 A 1.0001 1.0001 0 0 0 20.998047 33.892578 A 1.0001 1.0001 0 0 0 20.998047 33.900391 L 19.386719 41.146484 C 19.35993 41.068197 19.341173 41.039555 19.3125 40.947266 L 19.3125 40.945312 C 18.800713 39.30085 16.467362 31.5161 16.144531 30.439453 L 33.613281 18.792969 z M 22.640625 35.730469 L 24.863281 37.398438 L 21.597656 40.425781 L 22.640625 35.730469 z",
    params:
      "flex text-white h-16 bg-[#61a8de] hover:bg-[#61a8de]/70 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 rounded-3xl text-sm px-5 py-2.5 text-center items-center dark:focus:ring-[#3b5998]/55",
    text: "Полезный блог в Telegram",
    url: "tg://resolve?domain=otbelivanieme",
  },
  {
    id: "Instagram",
    icon: "M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z",
    params:
      "flex text-white h-16 bg-[#f00075] hover:bg-[#f00075]/70 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 rounded-3xl text-sm px-5 py-2.5 text-center items-center dark:focus:ring-[#3b5998]/55",
    text: "Отзывы в Instagram",
    url: "https://instagram.com/otbelivanie.me/",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-col space-y-2">
      {" "}
      {LINKS.map((link) => {
        return (
          <Link
            key={link.id}
            icon={link.icon}
            params={link.params}
            text={link.text}
            url={link.url}
          />
        );
      })}{" "}
    </div>
  );
};

export default SocialLinks;
