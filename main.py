import coffee

while CoffeePot.level() > 0:
    CoffeeCup.drink()
    if CoffeeCup.empty():
        Coffee.fill(CoffeePot)
    Work.GetSomeShitDone()