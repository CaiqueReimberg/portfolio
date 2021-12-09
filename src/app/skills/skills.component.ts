import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public skills = [
    {
      title: 'Front-end',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum ipsa, numquam dolor nisi iusto.',
    },
    {
      title: 'Back-end',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum ipsa, numquam dolor nisi iusto.',
    },
    {
      title: 'Desktop',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum ipsa, numquam dolor nisi iusto.',
    },
  ];

  public currentSkill = {
    title: 'Ola',
    description: 'aqui eu falo sobre bla'
  }

  constructor() {}

  ngOnInit(): void {}

  public skillClicked(skill: any): void {
    this.currentSkill = skill;
  }
}
