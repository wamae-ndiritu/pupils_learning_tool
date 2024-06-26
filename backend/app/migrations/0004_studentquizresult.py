# Generated by Django 5.0.6 on 2024-06-14 01:08

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_grade_question_quiz_answer_question_quiz_subject_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='StudentQuizResult',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('correct_answers', models.IntegerField()),
                ('total_questions', models.IntegerField()),
                ('score', models.FloatField()),
                ('submitted_at', models.DateTimeField(auto_now_add=True)),
                ('quiz', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.quiz')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.student')),
            ],
            options={
                'unique_together': {('student', 'quiz')},
            },
        ),
    ]
