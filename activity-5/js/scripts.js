(function(){
    var data = [
        {
            name: 'Trailing Spaces',
            description: 'Highlight trailing spaces and delete them in a flash!',
            author: 'Shardul Mahadik',
            url: 'https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces',
            downloads: 344431,
            stars: 4.8,
            price: 0,
            selector: 'p1'
        },
        {
            name: 'GitLens',
            description: 'Supercharge the Git capabilities built into Visual Studio Code — Visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more',
            author: 'Eric Amodio',
            url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
            downloads: 4655293,
            stars: 4.9,
            price: 0,
            selector: 'p2'
        },
        {
            name: 'Debugger for Chrome',
            description: 'Debug your JavaScript code in the Chrome browser, or any other target that supports the Chrome Debugger protocol.',
            author: 'Microsoft',
            url: 'https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome',
            downloads: 5239928,
            stars: 4.2,
            price: 0,
            selector: 'p3'
        }
    ];

    function Package(data){
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function(){
            return this.downloads.toLocaleString();
        };
        
        this.getFormattedStars = function(){
            return this.stars.toLocaleString();
        };
    }

    var getTodaysDate = function(){
        var today = new Date();
        return today.toDateString();
    }

    var getEl = function(id){
        return document.getElementById(id);
    }

    var writePackageInfo = function(package){
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector + '-author'),
            downloadEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars');

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    }

    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var trailingSpaces = new Package(data[0]);
    writePackageInfo(trailingSpaces);

    var gitLens = new Package(data[1]);
    writePackageInfo(gitLens);

    var debuggerForChrome = new Package(data[2]);
    writePackageInfo(debuggerForChrome);
}());