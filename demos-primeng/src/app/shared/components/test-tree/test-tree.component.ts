import { Component, OnInit, SimpleChange } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-test-tree',
  templateUrl: './test-tree.component.html',
  styleUrls: ['./test-tree.component.css']
})
export class TestTreeComponent implements OnInit {
  public files = [];
  public files2 = [];
  public selectedFiles: any;
  testSelect = [
    { "label": "Expenses.doc", "icon": "pi pi-file", "data": "Expenses Document", "selected": true },
    { "label": "Resume.doc", "icon": "pi pi-file", "data": "Resume Document", "selected": true }
  ];
  constructor() { }
  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
  }
  loadInitSelected() {
    this.testSelect.map (item => {
      this.nodeSelect({node: item})
    })

  }
  ngOnInit() {
    this.loadInitSelected();
    
    this.files = [
      {
        'label': 'Documents',
        "data": "Documents Folder",
        "expandedIcon": "pi pi-folder-open",
        "collapsedIcon": "pi pi-folder",
        "children": [{
          "label": "Work",
          "data": "Work Folder",
          "expandedIcon": "pi pi-folder-open",
          "collapsedIcon": "pi pi-folder",
          "children": [
            { "label": "Expenses.doc", "icon": "pi pi-file", "data": "Expenses Document", "selected": true }, 
            { "label": "Resume.doc", "icon": "pi pi-file", "data": "Resume Document"}],
          },
        {
          "label": "Home",
          "data": "Home Folder",
          "expandedIcon": "pi pi-folder-open",
          "collapsedIcon": "pi pi-folder",
          "children": [{ "label": "Invoices.txt", "icon": "pi pi-file", "data": "Invoices for this month" }]
        }]
      },
      {
        "label": "Pictures",
        "data": "Pictures Folder",
        "expandedIcon": "pi pi-folder-open",
        "collapsedIcon": "pi pi-folder",
        "children": [
          { "label": "barcelona.jpg", "icon": "pi pi-image", "data": "Barcelona Photo" },
          { "label": "logo.jpg", "icon": "pi pi-file", "data": "PrimeFaces Logo" },
          { "label": "primeui.png", "icon": "pi pi-image", "data": "PrimeUI Logo" }]
      },
      {
        "label": "Movies",
        "data": "Movies Folder",
        "expandedIcon": "pi pi-folder-open",
        "collapsedIcon": "pi pi-folder",
        "children": [{
          "label": "Al Pacino",
          "data": "Pacino Movies",
          "children": [{ "label": "Scarface", "icon": "pi pi-video", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "pi pi-file-video", "data": "Serpico Movie" }]
        },
        {
          "label": "Robert De Niro",
          "data": "De Niro Movies",
          "children": [{ "label": "Goodfellas", "icon": "pi pi-video", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "pi pi-video", "data": "Untouchables Movie" }]
        }]
      }
    ];
    this.selectedFiles = [
      {
        "label": "Expenses.doc",
        "icon": "pi pi-file",
        "data": "Expenses Document",
        "selected": true
      }
    ];
    this.expandAll();
    this.files2 = [
      {
        'label': 'Documents2',
        "data": "Documents Folder",
        "expandedIcon": "pi pi-folder-open",
        "collapsedIcon": "pi pi-folder",
        "children": [{
          "label": "Work2",
          "data": "Work Folder",
          "expandedIcon": "pi pi-folder-open",
          "collapsedIcon": "pi pi-folder",
          "children": [{ "label": "Expenses.doc", "icon": "pi pi-file", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "pi pi-file", "data": "Resume Document" }]
        },
        {
          "label": "Home2",
          "data": "Home Folder",
          "expandedIcon": "pi pi-folder-open",
          "collapsedIcon": "pi pi-folder",
          "children": [{ "label": "Invoices.txt", "icon": "pi pi-file", "data": "Invoices for this month" }]
        }]
      },
      {
        "label": "Pictures2",
        "data": "Pictures Folder",
        "expandedIcon": "pi pi-folder-open",
        "collapsedIcon": "pi pi-folder",
        "children": [
          { "label": "barcelona2.jpg", "icon": "pi pi-image", "data": "Barcelona Photo" },
          { "label": "logo2.jpg", "icon": "pi pi-file", "data": "PrimeFaces Logo" },
          { "label": "primeui2.png", "icon": "pi pi-image", "data": "PrimeUI Logo" }]
      },
      {
        "label": "Movies2",
        "data": "Movies Folder",
        "expandedIcon": "pi pi-folder-open",
        "collapsedIcon": "pi pi-folder",
        "children": [{
          "label": "Al Pacino2",
          "data": "Pacino Movies",
          "children": [{ "label": "Scarface", "icon": "pi pi-video", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "pi pi-file-video", "data": "Serpico Movie" }]
        },
        {
          "label": "Robert De Niro2",
          "data": "De Niro Movies",
          "children": [{ "label": "Goodfellas", "icon": "pi pi-video", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "pi pi-video", "data": "Untouchables Movie" }]
        }]
      }
    ];
    console.log(this.files);
    // this.files  = this.files.map (item => {
    //   item.partialSelected = true;
    //   item.checked = true;
    //   return item;
    // })
    // console.log(this.selectedFiles);
  }
  nodeSelect(event) {
    console.log(event);
    console.log(this.selectedFiles);
    // this.selectedFiles = this.selectedFiles.map(item => {
    //   // item.partialSelected = true;
    //   return item;
    // })
  }
  onDrop(event) {
    console.log(event);
    
      // event.accept();
    
  }
  expandAll() {
    this.files.forEach(node => {
      this.expandRecursive(node, true);
    });
  }

  collapseAll() {
    this.files2.forEach(node => {
      this.expandRecursive(node, false);
    });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }
}
