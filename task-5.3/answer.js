const ans1 = {
    crawl(){},
    walk(){},
}

const ans2 = Object.create(ans1)
answer2.crawl = function(){}
answer2.walk = function(){}

const answer =  Object.create(ans2)
answer.read = function(){}
answer.write = function(){}
