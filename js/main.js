$(document).ready(function() {
  var noOfItems = 0;

  //removing static elements
  $(".deleteBtn").on("click", function() {
    $(this)
      .closest(".listItem")
      .remove();
    noOfItems--;
    $("#itemsCount").text(noOfItems);
  });

  //problem

  //removing dynamically created elements
  $("#listContainer").on("click", ".deleteBtn", function() {
    //$(this).closest(".listItem").find('.amountInput').val(0);
    $(this)
      .closest(".listItem")
      .remove();
    noOfItems--;
    $("#itemsCount").text(noOfItems);
  });

  //problem

  $("#add").on("click", function() {
    var itemName = prompt("Enter the name of the item:");
    if (itemName != null) {
      $("#listContainer").append(
        '<div class="listItem"><div class="name">' +
          itemName +
          '</div><div class="amount"><input type="text" class="amountInput" /></div><div class="delete"><div class="deleteBtn">X</div></div></div>'
      );
      noOfItems++;
      $("#itemsCount").text(noOfItems);
    }
  });

  setInterval(intervalCheck, 100);

  function intervalCheck() {
    //$("#listContainer").on("keyup change", ".amountInput", function() {
    var totalAmount = 0;
    if ($(".amountInput").length === 0) {
      $("#amountCount").text("0");
    } else {
      $(".amountInput").each(function() {
        totalAmount += parseInt($(this).val());
        if (isNaN(totalAmount)) {
          $("#amountCount").text("-");
        } else {
          $("#amountCount").text(totalAmount);
        }
      });
    }
    //});
  }
});
