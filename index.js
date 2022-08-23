app = () => {
  const arrow = $(".arrow");
  arrow.on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#aboutme").offset().top,
      },
      1000
    );
  });
};
