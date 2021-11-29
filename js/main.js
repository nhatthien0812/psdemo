// Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling

$(document).ready(function () {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function () {
    $(".scroll-animations .animated").each(function () {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass("fadeIn");
      }
    });
  });

  function resetButton() {
    var $button = $('#btn-send-message');
    $button.attr('disabled', false);
    $button.text('Send Message');
  }

  $('form.section-form').on('submit', function (e) {
    e.preventDefault();
    var $result = $('#result-placeholder');
    var $button = $('#btn-send-message');
    var errorMessage = 'Something went wrong! Please try again or send us an email to <a href="mailto:support@polarisec.com">support@polarisec.com</a>';
    var successMessage = 'Thank you! Your message has been successfully sent. We will be in touch shortly.';
    $button.text('Sending...');
    $button.attr('disabled', true);
    $result.text('');
    var data = $(this).serializeArray().reduce(function (a, e) {
      a[e.name] = e.value;
      return a;
    }, {});

    try {
      fetch('https://polarisec.io/api/contact-us', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      }).then(response => response.json())
        .then((data) => {
          resetButton();
          if (data.success) {
            $result.text(successMessage);
            $button.remove();
            $(this)[0].reset();
          } else {
            $result.html(errorMessage);
          }

        }).catch(e => {
          resetButton();
          $result.html(errorMessage);
          console.log('error: ', e);
        });
    } catch (e) {
      console.log('error: ', e);
    }
  })
});
