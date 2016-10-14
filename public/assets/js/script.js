$(document).ready(function () {
    $('.path-share-button').pathPartner({
        clientId: '63c2dd2e4c395ae09fa013ea3c1f9bf6392b19f4', // insert your client id in here
        appname: 'jQuery Pathner Demo', // insert your app name in here
        action: '/post-moment', // url for post moment on server
        method: 'post', // let's set post as a method
        data: function (self) {
            return {
                url: window.location.href,
                image: $('#image_preview').attr('src'),
                title: $(self).data('title'),
                description: $('#preview_description').text().trim()
            };
        },

        // optional
        callback: {
            success: function (data, done) {
                console.log(data);
                done();
            },
            error: function (xhr, status, err) {
                console.error(status, err.toString());
            }
        }
    });
});
