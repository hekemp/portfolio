htmlForSkill = (skill) ->
  """
  <p class="progress-label">#{skill.name}</p>
  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: #{skill.percent}%" role="progressbar" aria-valuenow="#{skill.percent}" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  """

$ ->
  skills = skillsDetails()
  skills1Html = ''
  skills2Html = ''
  for skill in skills[0]
    do (skill) ->
      skills1Html += htmlForSkill(skill)
  for skill in skills[1]
    do (skill) ->
      skills2Html += htmlForSkill(skill)

  $('#skills1').html(skills1Html)
  $('#skills2').html(skills2Html)
  return
