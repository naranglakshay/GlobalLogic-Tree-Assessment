import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fulltree',
  templateUrl: './fulltree.component.html',
  styleUrls: ['./fulltree.component.css']
})
export class FulltreeComponent {
  
  // FullTree Component Used for Defining the Tree Structure(Using npm tree component)
  
  nodes = [
    {
      "name": "countries",
      "children": [
        {
          "name": "india",
          "children": [
            {
              "name": "zones",
              "children": [
                {
                  "name": "north",
                  "children": [
                    {
                      "name": "states",
                      "children": [
                        {
                          "name": "punjab",
                          "children": [
                            {
                              "value": "population",
                              "name": "28000000"
                            },
                            {
                              "name": "J&K",
                              "children": [
                                {
                                  "value": "population",
                                  "name": "1000000"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "south",
                  "children": [
                    {
                      "name": "states",
                      "children": [
                        {
                          "name": "tamil nadu",
                          "children": [
                            {
                              "value": "population",
                              "name": "67000000"
                            },
                            {
                              "name": "kerala",
                              "children": [
                                {
                                  "value": "population",
                                  "name": "34000000"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];
}
