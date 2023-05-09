import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import Question, { ANSWER, AnswerAudio } from 'src/app/models/question';
import { AudioService } from 'src/app/services/audio/audio.service';
import { Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  @Input() question?: Question;

  answerChosen = new FormControl(null, Validators.required);
  private answerChangeSubscription?: Subscription;

  submittedAnswer = -1;
  formStates = FormState;
  quizState = FormState.UNSELECTED;

  @Output() quizComplete = new EventEmitter<boolean>();

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.playQuestionAudio();
    this.shuffleOptions();
    this.answerChangeSubscription = this.answerChosen.valueChanges.subscribe(
      () => {
        this.onAnswerChange();
      }
    );
  }

  shuffleOptions() {
    if(!this.question) return;
    const options = [...this.question?.options];
    this.question.options = options
      .map(option => ({ option, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ option }) => option)

  }

  onAnswerChange() {
    this.submittedAnswer = -1;
    const option = this.question?.options[this.answerChosen.value ?? -1];
    if (option) {
      this.audioService.playAudio(option.audio);
      this.quizState = FormState.SELECTED;
    }
  }

  playQuestionAudio() {
    if (!this.question) return;
    this.audioService.playAudio(this.question.audio);
  }

  onSubmit() {
    if (!this.answerChosen.valid) return;
    this.submittedAnswer = this.answerChosen.value ?? -1;
    const option = this.question?.options[this.submittedAnswer];
    if (!option) return;
    this.quizState = ([ANSWER.BEST, ANSWER.NEXT_BEST] as string[]).includes(
      option.answer
    )
      ? FormState.SUBMITTED_CORRECT
      : FormState.SUBMITTED_INCORRECT;
    this.audioService.playAudio(AnswerAudio[option.answer as ANSWER]);
    this.answerChosen.setValue(null, { emitEvent: false });
    if (this.quizState === FormState.SUBMITTED_CORRECT) {
      this.answerChosen.disable();
      setTimeout(() => {
        this.quizComplete.emit(true);
      }, 2000);
    } else {
      setTimeout(() => {
        if (this.quizState == FormState.SUBMITTED_INCORRECT) {
          this.quizState = FormState.UNSELECTED;
        }
      }, 2500);
    }
  }

  ngOnDestroy() {
    this.answerChangeSubscription?.unsubscribe();
  }
}

enum FormState {
  UNSELECTED,
  SELECTED,
  SUBMITTED_INCORRECT,
  SUBMITTED_CORRECT,
}
