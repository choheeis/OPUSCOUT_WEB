$(function () {
    chrome.storage.sync.get('limit', function (budget) {
        $('#limit').val(budget.limit);
    });

    $('#savelimit').click(function () {
        let limit = $('#limit').val();
        if (limit) {
            chrome.storage.sync.set({ limit: limit }, function () {
                close();
            });
        }
    });

    $('#resetTotal').click(function () {
        chrome.storage.sync.set({ total: 0 }, function () {
            let notifOptions = {
                type: 'basic',
                iconUrl: 'icon48.png',
                title: 'Total Reset',
                message: 'Total has been reset to zero',
            };
            chrome.notifications.create('resetNotif', notifOptions);
        });
    });
});
