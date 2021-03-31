// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    // Arena Steup
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009600)
    InitializeEvent(0, 14700000, 0);
    
    // Generators
    DeactivateGenerator(4709000, Disabled);
    DeactivateGenerator(4709001, Disabled);
    DeactivateGenerator(4709002, Disabled);
    DeactivateGenerator(4709003, Disabled);
    DeactivateGenerator(4709004, Disabled);
    
    // Memory of Skeleton
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 25009600)
    SetEventFlag(25009600, OFF);
    SetMapCeremony(40, 0, 0);
    InitializeEvent(0, 14701000, 0);
    
    // Companion - Setup
    InitializeCommonEvent(20080000, 4700750); // Companion 1
    InitializeCommonEvent(20080000, 4700751); // Companion 2
    InitializeCommonEvent(20080000, 4700752); // Companion 3
    InitializeCommonEvent(20080000, 4700753); // Companion 4
    InitializeCommonEvent(20080000, 4700754); // Companion 5
    InitializeCommonEvent(20080000, 4700755); // Companion 6
    InitializeCommonEvent(20080000, 4700756); // Companion 7
    InitializeCommonEvent(20080000, 4700757); // Companion 8
    InitializeCommonEvent(20080000, 4700758); // Companion 9
    InitializeCommonEvent(20080000, 4700759); // Companion 10
    InitializeCommonEvent(20080000, 4700760); // Companion 11
    InitializeCommonEvent(20080000, 4700761); // Companion 12
    InitializeCommonEvent(20080000, 4700762); // Companion 13
    InitializeCommonEvent(20080000, 4700763); // Companion 14
    InitializeCommonEvent(20080000, 4700764); // Companion 15
    InitializeCommonEvent(20080000, 4700765); // Companion 16
    InitializeCommonEvent(20080000, 4700766); // Companion 17
    InitializeCommonEvent(20080000, 4700767); // Companion 18
    InitializeCommonEvent(20080000, 4700768); // Companion 19
    InitializeCommonEvent(20080000, 4700769); // Companion 20
    
    // Companion - Setup
    InitializeCommonEvent(20080001, 4700750); // Companion 1
    InitializeCommonEvent(20080001, 4700751); // Companion 2
    InitializeCommonEvent(20080001, 4700752); // Companion 3
    InitializeCommonEvent(20080001, 4700753); // Companion 4
    InitializeCommonEvent(20080001, 4700754); // Companion 5
    InitializeCommonEvent(20080001, 4700755); // Companion 6
    InitializeCommonEvent(20080001, 4700756); // Companion 7
    InitializeCommonEvent(20080001, 4700757); // Companion 8
    InitializeCommonEvent(20080001, 4700758); // Companion 9
    InitializeCommonEvent(20080001, 4700759); // Companion 10
    InitializeCommonEvent(20080001, 4700760); // Companion 11
    InitializeCommonEvent(20080001, 4700761); // Companion 12
    InitializeCommonEvent(20080001, 4700762); // Companion 13
    InitializeCommonEvent(20080001, 4700763); // Companion 14
    InitializeCommonEvent(20080001, 4700764); // Companion 15
    InitializeCommonEvent(20080001, 4700765); // Companion 16
    InitializeCommonEvent(20080001, 4700766); // Companion 17
    InitializeCommonEvent(20080001, 4700767); // Companion 18
    InitializeCommonEvent(20080001, 4700768); // Companion 19
    InitializeCommonEvent(20080001, 4700769); // Companion 20
    
    // Companion - Tools
    InitializeCommonEvent(20080002, 4700750); // Companion 1
    InitializeCommonEvent(20080002, 4700751); // Companion 2
    InitializeCommonEvent(20080002, 4700752); // Companion 3
    InitializeCommonEvent(20080002, 4700753); // Companion 4
    InitializeCommonEvent(20080002, 4700754); // Companion 5
    InitializeCommonEvent(20080002, 4700755); // Companion 6
    InitializeCommonEvent(20080002, 4700756); // Companion 7
    InitializeCommonEvent(20080002, 4700757); // Companion 8
    InitializeCommonEvent(20080002, 4700758); // Companion 9
    InitializeCommonEvent(20080002, 4700759); // Companion 10
    InitializeCommonEvent(20080002, 4700760); // Companion 11
    InitializeCommonEvent(20080002, 4700761); // Companion 12
    InitializeCommonEvent(20080002, 4700762); // Companion 13
    InitializeCommonEvent(20080002, 4700763); // Companion 14
    InitializeCommonEvent(20080002, 4700764); // Companion 15
    InitializeCommonEvent(20080002, 4700765); // Companion 16
    InitializeCommonEvent(20080002, 4700766); // Companion 17
    InitializeCommonEvent(20080002, 4700767); // Companion 18
    InitializeCommonEvent(20080002, 4700768); // Companion 19
    InitializeCommonEvent(20080002, 4700769); // Companion 20

    // Companion - Effects
    InitializeCommonEvent(20080010, 4700750); // Companion 1
    InitializeCommonEvent(20080010, 4700751); // Companion 2
    InitializeCommonEvent(20080010, 4700752); // Companion 3
    InitializeCommonEvent(20080010, 4700753); // Companion 4
    InitializeCommonEvent(20080010, 4700754); // Companion 5
    InitializeCommonEvent(20080010, 4700755); // Companion 6
    InitializeCommonEvent(20080010, 4700756); // Companion 7
    InitializeCommonEvent(20080010, 4700757); // Companion 8
    InitializeCommonEvent(20080010, 4700758); // Companion 9
    InitializeCommonEvent(20080010, 4700759); // Companion 10
    InitializeCommonEvent(20080010, 4700760); // Companion 11
    InitializeCommonEvent(20080010, 4700761); // Companion 12
    InitializeCommonEvent(20080010, 4700762); // Companion 13
    InitializeCommonEvent(20080010, 4700763); // Companion 14
    InitializeCommonEvent(20080010, 4700764); // Companion 15
    InitializeCommonEvent(20080010, 4700765); // Companion 16
    InitializeCommonEvent(20080010, 4700766); // Companion 17
    InitializeCommonEvent(20080010, 4700767); // Companion 18
    InitializeCommonEvent(20080010, 4700768); // Companion 19
    InitializeCommonEvent(20080010, 4700769); // Companion 20
    
    // Only load when player is in map
    IfPlayerInoutMap(AND_01, true, 47, 0);
    WaitForConditionGroupState(PASS, AND_01);
    
    // Companion - Summoning
    InitializeCommonEvent(20080100, 4700750, 160760000, 160760200, 47, 0); // Companion 1
    InitializeCommonEvent(20080100, 4700751, 160760001, 160760200, 47, 0); // Companion 2
    InitializeCommonEvent(20080100, 4700752, 160760002, 160760200, 47, 0); // Companion 3
    InitializeCommonEvent(20080100, 4700753, 160760003, 160760200, 47, 0); // Companion 4
    InitializeCommonEvent(20080100, 4700754, 160760004, 160760200, 47, 0); // Companion 5
    InitializeCommonEvent(20080100, 4700755, 160760005, 160760200, 47, 0); // Companion 6
    InitializeCommonEvent(20080100, 4700756, 160760006, 160760200, 47, 0); // Companion 7
    InitializeCommonEvent(20080100, 4700757, 160760007, 160760200, 47, 0); // Companion 8
    InitializeCommonEvent(20080100, 4700758, 160760008, 160760200, 47, 0); // Companion 9
    InitializeCommonEvent(20080100, 4700759, 160760009, 160760200, 47, 0); // Companion 10
    InitializeCommonEvent(20080100, 4700760, 160760010, 160760200, 47, 0); // Companion 11
    InitializeCommonEvent(20080100, 4700761, 160760011, 160760200, 47, 0); // Companion 12
    InitializeCommonEvent(20080100, 4700762, 160760012, 160760200, 47, 0); // Companion 13
    InitializeCommonEvent(20080100, 4700763, 160760013, 160760200, 47, 0); // Companion 14
    InitializeCommonEvent(20080100, 4700764, 160760014, 160760200, 47, 0); // Companion 15
    InitializeCommonEvent(20080100, 4700765, 160760015, 160760200, 47, 0); // Companion 16
    InitializeCommonEvent(20080100, 4700766, 160760016, 160760200, 47, 0); // Companion 17
    InitializeCommonEvent(20080100, 4700767, 160760017, 160760200, 47, 0); // Companion 18
    InitializeCommonEvent(20080100, 4700768, 160760018, 160760200, 47, 0); // Companion 19
    InitializeCommonEvent(20080100, 4700769, 160760019, 160760200, 47, 0); // Companion 20
});
    
// Arena
Event(14700000, Default, function() {
    GotoIfHollowArenaMatchType(Label.LABEL0, HollowArenaMatchType.Duel);
    GotoIfHollowArenaMatchType(Label.LABEL1, HollowArenaMatchType.TwoPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL2, HollowArenaMatchType.FourPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL3, HollowArenaMatchType.SixPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL4, HollowArenaMatchType.TwoVersusThree);
    GotoIfHollowArenaMatchType(Label.LABEL5, HollowArenaMatchType.ThreeVersusThree);
    Label0();
    InitializeCommonEvent(20005920, 0, 14705300, 10020000, 10020010);
    InitializeCommonEvent(20005930, 14705300);
    InitializeCommonEvent(20005941, 14705300);
    EndUnconditionally(EventEndType.End);
    Label1();
    InitializeCommonEvent(20005920, 1, 14705300, 10020001, 10020011);
    GotoUnconditionally(Label.LABEL9);
    Label2();
    InitializeCommonEvent(20005920, 2, 14705300, 10020002, 10020012);
    GotoUnconditionally(Label.LABEL9);
    Label3();
    InitializeCommonEvent(20005920, 3, 14705300, 10020003, 10020013);
    GotoUnconditionally(Label.LABEL9);
    Label4();
    InitializeCommonEvent(20005920, 4, 14705300, 10020004, 10020014);
    GotoUnconditionally(Label.LABEL9);
    Label5();
    InitializeCommonEvent(20005920, 5, 14705300, 10020005, 10020015);
    GotoUnconditionally(Label.LABEL9);
    Label9();
    InitializeCommonEvent(20005940, 14705300);
});

// Return Bonfire
Event(14700100, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfActionButtonInArea(MAIN, 30002, 4701950);
    
    WarpPlayer(40, 0, 4000972);
    
    EndUnconditionally(EventEndType.End);
});

// Soul Boost
Event(14700200, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);

    WaitFixedTimeSeconds(60.0);
    
    SetSpEffect(10000, 260200000);
    
    EndUnconditionally(EventEndType.Restart);
});

// Enemy Effect
Event(14700300, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);

    InitializeCommonEvent(20081010, 4705761, 250001020, 25000400); // Curse of Pride - 10%
    InitializeCommonEvent(20081010, 4705761, 250001021, 25000401); // Curse of Pride - 20%
    InitializeCommonEvent(20081010, 4705761, 250001022, 25000402); // Curse of Pride - 30%
    InitializeCommonEvent(20081010, 4705761, 250001023, 25000403); // Curse of Pride - 40%
    InitializeCommonEvent(20081010, 4705761, 250001024, 25000404); // Curse of Pride - 50%
    InitializeCommonEvent(20081010, 4705761, 250001025, 25000405); // Curse of Pride - 60%
    InitializeCommonEvent(20081010, 4705761, 250001026, 25000406); // Curse of Pride - 70%
    InitializeCommonEvent(20081010, 4705761, 250001027, 25000407); // Curse of Pride - 80%
    InitializeCommonEvent(20081010, 4705761, 250001028, 25000408); // Curse of Pride - 90%
    InitializeCommonEvent(20081010, 4705761, 250001029, 25000409); // Curse of Pride - 100%

    InitializeCommonEvent(20081010, 4705761, 250001120, 25000410); // Curse of Fortitude - 5%
    InitializeCommonEvent(20081010, 4705761, 250001121, 25000411); // Curse of Fortitude - 10%
    InitializeCommonEvent(20081010, 4705761, 250001122, 25000412); // Curse of Fortitude - 15%
    InitializeCommonEvent(20081010, 4705761, 250001123, 25000413); // Curse of Fortitude - 20%
    InitializeCommonEvent(20081010, 4705761, 250001124, 25000414); // Curse of Fortitude - 25%
    InitializeCommonEvent(20081010, 4705761, 250001125, 25000415); // Curse of Fortitude - 30%
    InitializeCommonEvent(20081010, 4705761, 250001126, 25000416); // Curse of Fortitude - 35%
    InitializeCommonEvent(20081010, 4705761, 250001127, 25000417); // Curse of Fortitude - 40%
    InitializeCommonEvent(20081010, 4705761, 250001128, 25000418); // Curse of Fortitude - 45%
    InitializeCommonEvent(20081010, 4705761, 250001129, 25000419); // Curse of Fortitude - 50%
    
    InitializeCommonEvent(20081010, 4705761, 250001320, 25000420); // Curse of Vitality - 10
    InitializeCommonEvent(20081010, 4705761, 250001321, 25000421); // Curse of Vitality - 20
    InitializeCommonEvent(20081010, 4705761, 250001322, 25000422); // Curse of Vitality - 30
    InitializeCommonEvent(20081010, 4705761, 250001323, 25000423); // Curse of Vitality - 40
    InitializeCommonEvent(20081010, 4705761, 250001324, 25000424); // Curse of Vitality - 50
    InitializeCommonEvent(20081010, 4705761, 250001325, 25000425); // Curse of Vitality - 60
    InitializeCommonEvent(20081010, 4705761, 250001326, 25000426); // Curse of Vitality - 70
    InitializeCommonEvent(20081010, 4705761, 250001327, 25000427); // Curse of Vitality - 80
    InitializeCommonEvent(20081010, 4705761, 250001328, 25000428); // Curse of Vitality - 90
    InitializeCommonEvent(20081010, 4705761, 250001329, 25000429); // Curse of Vitality - 100
    
    InitializeCommonEvent(20081010, 4705761, 250001420, 25000430); // Curse of Wrath - 10
    InitializeCommonEvent(20081010, 4705761, 250001421, 25000431); // Curse of Wrath - 20
    InitializeCommonEvent(20081010, 4705761, 250001422, 25000432); // Curse of Wrath - 30
    InitializeCommonEvent(20081010, 4705761, 250001423, 25000433); // Curse of Wrath - 40
    InitializeCommonEvent(20081010, 4705761, 250001424, 25000434); // Curse of Wrath - 50
    InitializeCommonEvent(20081010, 4705761, 250001425, 25000435); // Curse of Wrath - 60
    InitializeCommonEvent(20081010, 4705761, 250001426, 25000436); // Curse of Wrath - 70
    InitializeCommonEvent(20081010, 4705761, 250001427, 25000437); // Curse of Wrath - 80
    InitializeCommonEvent(20081010, 4705761, 250001428, 25000438); // Curse of Wrath - 90
    InitializeCommonEvent(20081010, 4705761, 250001429, 25000439); // Curse of Wrath - 100
    
    InitializeCommonEvent(20081000, 4705750, 25000440);             // Curse of Attraction
    InitializeCommonEvent(20081010, 4705761, 250001920, 25000480);  // Curse of Frailty
    InitializeCommonEvent(20081010, 4705770, 250002220, 25000510);  // Curse of Valor
    
    SetSpeffect(4705761, 260200410); // General Scaling
    
    EndUnconditionally(EventEndType.Restart);
});

// Memory of Skeletons
Event(14701000, Default, function() {
    InitializeEvent(0, 14700100, 0); // Return Bonfire
    InitializeEvent(0, 14700200, 0); // Soul Boost
    InitializeEvent(0, 14700300, 0); // Enemy Effect
    InitializeEvent(0, 14701001, 0); // Generators
    
    DisplayEpitaphMessage(99031100);
});

// Generators
Event(14701001, Default, function() {
    DeactivateGenerator(4709000, Enabled);
    DeactivateGenerator(4709001, Enabled);
    DeactivateGenerator(4709002, Enabled);
    DeactivateGenerator(4709003, Enabled);
    DeactivateGenerator(4709004, Enabled);

    WaitFixedTimeSeconds(5.0);
    
    DeactivateGenerator(4709000, Disabled);
    DeactivateGenerator(4709001, Disabled);
    DeactivateGenerator(4709002, Disabled);
    DeactivateGenerator(4709003, Disabled);
    DeactivateGenerator(4709004, Disabled);
    
    WaitFixedTimeSeconds(15.0);
    
    EndUnconditionally(EventEndType.Restart);
});
