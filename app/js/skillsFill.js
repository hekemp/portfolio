var htmlForSkill;

htmlForSkill = function(skill) {
  return "<p class=\"progress-label\">" + skill.name + "</p>\n<div class=\"progress\">\n  <div class=\"progress-bar progress-bar-striped progress-bar-animated\" style=\"width: " + skill.percent + "%\" role=\"progressbar\" aria-valuenow=\"" + skill.percent + "\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n</div>";
};

$(function() {
  var fn, fn1, i, j, len, len1, ref, ref1, skill, skills, skills1Html, skills2Html;
  skills = skillsDetails();
  skills1Html = '';
  skills2Html = '';
  ref = skills[0];
  fn = function(skill) {
    return skills1Html += htmlForSkill(skill);
  };
  for (i = 0, len = ref.length; i < len; i++) {
    skill = ref[i];
    fn(skill);
  }
  ref1 = skills[1];
  fn1 = function(skill) {
    return skills2Html += htmlForSkill(skill);
  };
  for (j = 0, len1 = ref1.length; j < len1; j++) {
    skill = ref1[j];
    fn1(skill);
  }
  $('#skills1').html(skills1Html);
  $('#skills2').html(skills2Html);
});
